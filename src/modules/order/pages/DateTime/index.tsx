import React from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StatusBar, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Container, SelectionButton, Header, ChevronIcon } from './styles';

const DateTime: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#e76c22',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectionButton onPress={() => navigate('Order')}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#e76c22"
            barStyle="light-content"
          />

          <SelectionButton
            onPress={() => navigate('Cart', { caller: 'Menu' })}
          />
        </Header>
      </View>
      <View>
        <DateTimePicker value={new Date()} />
      </View>
      ;
    </Container>
  );
};

export default DateTime;
