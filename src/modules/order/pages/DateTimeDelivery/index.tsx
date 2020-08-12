/* eslint-disable import/no-duplicates */
import React, { useState, useCallback } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, connect } from 'react-redux';
import { View, StatusBar, Platform } from 'react-native';
import { ptBR } from 'date-fns/locale';
import { formatRelative, subDays } from 'date-fns';

import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { bindActionCreators } from 'redux';
import { useDeliveryDateTime } from '../../../../shared/hooks/deliveryDateTime';

import * as CartActions from '../../../../store/modules/cart/actions';

import {
  Container,
  SelectButton,
  Header,
  ChevronIcon,
  Calendar,
  DateTimeSection,
  OpenDataPickerButton,
  OpenDataPickerButtonText,
  ConfirmButton,
  StartusBarText,
} from './styles';

const DateTimeDelivery: React.FC = () => {
  const { reset, navigate, goBack } = useNavigation();
  const dispatch = useDispatch();

  const { setDateTime } = useDeliveryDateTime();

  const [showDatePicker, setShowDatePicker] = useState(false);

  const [deliveryDate, setDeliveryDate] = useState(new Date());
  const [deliveryTime, setDeliveryTime] = useState(new Date());

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

  const handleTimeChanged = useCallback(
    (event: any, time: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShowDatePicker(false);
      }

      if (time) {
        setDeliveryTime(time);
      }
    },
    [],
  );

  const handleConfirmDateTime = useCallback(async () => {
    const deliveryDateTime = { deliveryDate, deliveryTime };

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
  }, [reset, dispatch, navigate, setDateTime, deliveryDate, deliveryTime]);

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
      <View>
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
                  display="default"
                  onChange={handleDateChanged}
                  textColor="#FD9E63"
                  value={deliveryDate}
                  minimumDate={new Date()}
                />
              </View>
              <View>
                <DateTimePicker
                  locale="pt-BR"
                  mode="time"
                  display="default"
                  onChange={handleTimeChanged}
                  textColor="#FD9E63"
                  value={deliveryTime}
                  minuteInterval={30}
                />
              </View>
            </DateTimeSection>
          )}
          <ConfirmButton onPress={handleConfirmDateTime}>
            <OpenDataPickerButtonText>Confirmar</OpenDataPickerButtonText>
          </ConfirmButton>
        </Calendar>
      </View>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: any): any =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(DateTimeDelivery);
