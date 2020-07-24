/* eslint-disable import/no-duplicates */
import React, { useState, useCallback, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StatusBar, Platform } from 'react-native';
import { ptBR, pt } from 'date-fns/locale';
// eslint-disable-next-line import/no-duplicates
import { formatRelative, subDays } from 'date-fns';

import { useNavigation } from '@react-navigation/native';
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
} from './styles';

const DateTime: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  // useEffect(() => {
  //   StatusBar.setBarStyle();
  //   console.tron.log('statusBarHeight: ', StatusBar.setBarStyle);
  // }, []);

  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, []);

  const handleDateChanged = useCallback(
    (event: any, date: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShowDatePicker(false);
      }

      if (date) {
        setSelectedDate(date);
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
        setSelectedTime(time);
      }
    },
    [],
  );

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#e76c22',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectButton onPress={() => goBack()}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectButton>

          <StatusBar backgroundColor="#e76c22" />
        </Header>
      </View>
      <View>
        <Calendar>
          <OpenDataPickerButton onPress={handleToggleDatePicker}>
            <OpenDataPickerButtonText>
              {formatRelative(subDays(selectedDate, 0), selectedDate, {
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
                  textColor="#e76c22"
                  value={selectedDate}
                  minimumDate={new Date()}
                />
              </View>
              <View>
                <DateTimePicker
                  locale="pt-BR"
                  mode="time"
                  display="default"
                  onChange={handleTimeChanged}
                  textColor="#e76c22"
                  value={selectedTime}
                  minuteInterval={30}
                />
              </View>
            </DateTimeSection>
          )}
          <ConfirmButton onPress={() => navigate('Location')}>
            <OpenDataPickerButtonText>Confirmar</OpenDataPickerButtonText>
          </ConfirmButton>
        </Calendar>
      </View>
    </Container>
  );
};

export default DateTime;
