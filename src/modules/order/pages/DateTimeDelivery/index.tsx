/* eslint-disable import/no-duplicates */
import React, { useState, useCallback, useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, connect } from 'react-redux';
import { View, StatusBar, Platform } from 'react-native';
import { ptBR } from 'date-fns/locale';
import { format, formatRelative, subDays, getHours } from 'date-fns';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators } from 'redux';
import { addMinutes } from 'date-fns/esm';
import { useDeliveryDateTime } from '../../../../shared/hooks/deliveryDateTime';

import * as CartActions from '../../../../store/modules/cart/actions';

import { Hours } from '../../../../util/hours';

import {
  Container,
  SelectButton,
  Header,
  ChevronIcon,
  ContentDateTime,
  Calendar,
  DateTimeSection,
  OpenDataPickerButton,
  OpenDataPickerButtonText,
  ConfirmButton,
  StartusBarText,
  Schedule,
  ScheduleText,
  Section,
  SectionContent,
  Hour,
  HourText,
} from './styles';

const DateTimeDelivery: React.FC = () => {
  const { reset, navigate, goBack } = useNavigation();
  const dispatch = useDispatch();

  const { setDateTime } = useDeliveryDateTime();

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [deliveryDate, setDeliveryDate] = useState(addMinutes(new Date(), 30));

  const deliveryAvailability = useMemo(() => {
    const formattedDate = format(deliveryDate, 'eeee, d, MMMM', {
      locale: ptBR,
    });

    const today = format(new Date(), 'eeee, d, MMMM', {
      locale: ptBR,
    });

    function remove(str: string, startIndex: number): any {
      return str.substr(0, startIndex);
    }

    const myIndex = formattedDate.search(',');

    const weekDay = remove(formattedDate, myIndex);

    let startHour = String('');
    let endHour = String('');
    let available = true;

    if (weekDay) {
      if (weekDay === 'sábado') {
        startHour = '08:00';
        endHour = '16:30';
      } else if (weekDay === 'domingo') {
        startHour = '08:00';
        endHour = '12:30';
      } else {
        startHour = '09:00';
        endHour = '18:00';
      }
    }

    // console.tron.log(weekDay, startHour.slice(1, 2), endHour.slice(0, 2));

    return Hours.filter(
      ({ hour }) =>
        hour >= Number(startHour.slice(1, 2)) &&
        hour < Number(endHour.slice(0, 2)),
    ).map(({ hour }) => {
      const num = Number(getHours(new Date(2020, 8, 12, 10, 0)));
      if (formattedDate === today) {
        if (hour >= num) {
          available = true;
        } else {
          available = false;
        }
      }

      console.tron.log('data de hoje ', formattedDate, today);

      return {
        hour,
        available,
        hourFullFormatted: format(new Date().setHours(hour), 'HH:00'),
        hourHalfFormatted: format(new Date().setHours(hour), 'HH:30'),
      };
    });
  }, [deliveryDate]);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, []);

  const handleDateChanged = useCallback(
    (event: any, date: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShowDatePicker(false);
      }

      if (date) {
        setDeliveryDate(date);
      }
    },
    [],
  );

  const handleConfirmDateTime = useCallback(async () => {
    const deliveryDateTime = { deliveryDate };
    console.tron.log('deliveryDate', deliveryDate);
    dispatch({
      type: '@order/ADD_DATE_TIME',
      deliveryDateTime,
    });

    await AsyncStorage.removeItem('@Massas:deliveryDateTime');

    AsyncStorage.setItem(
      '@Massas:deliveryDateTime',
      JSON.stringify(deliveryDateTime),
    );

    setDateTime(deliveryDateTime);

    console.tron.log(deliveryDateTime);

    reset({
      index: 0,
      routes: [{ name: 'MainStack' }],
    });

    navigate('MainStack');
  }, [reset, dispatch, navigate, setDateTime, deliveryDate]);

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#FD9E63',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectButton onPress={() => goBack()}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectButton>

          <StatusBar backgroundColor="#FD9E63" />
          <StartusBarText>Horário da entrega</StartusBarText>
        </Header>
      </View>
      <ContentDateTime>
        <Calendar>
          <OpenDataPickerButton onPress={handleToggleDatePicker}>
            <OpenDataPickerButtonText>
              {formatRelative(subDays(deliveryDate, 0), deliveryDate, {
                locale: ptBR,
              })}
            </OpenDataPickerButtonText>
          </OpenDataPickerButton>

          {showDatePicker && (
            <DateTimeSection>
              <View>
                <DateTimePicker
                  locale="pt-BR"
                  mode="date"
                  onChange={handleDateChanged}
                  textColor="#FD9E63"
                  value={deliveryDate}
                  minuteInterval={15}
                  // minimumDate={addMinutes(deliveryDate, 60)}
                />
              </View>
            </DateTimeSection>
          )}
          <ConfirmButton onPress={handleConfirmDateTime}>
            <OpenDataPickerButtonText>Confirmar</OpenDataPickerButtonText>
          </ConfirmButton>
        </Calendar>

        <Schedule>
          <ScheduleText>Escolha o horário</ScheduleText>

          <Section>
            <SectionContent>
              {deliveryAvailability.map(
                ({ hourFullFormatted, hourHalfFormatted, available }) => (
                  <>
                    <Hour available={available} key={hourFullFormatted}>
                      <HourText>
                        {hourFullFormatted} {available}
                      </HourText>
                    </Hour>
                    <Hour available={available} key={hourHalfFormatted}>
                      <HourText>{hourHalfFormatted}</HourText>
                    </Hour>
                  </>
                ),
              )}
            </SectionContent>
          </Section>
        </Schedule>
      </ContentDateTime>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any): any =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(DateTimeDelivery);
