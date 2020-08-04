import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, TextInput, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../../../shared/service/api';

import {
  StartusBarText,
  Container,
  SelectionButton,
  Header,
  ChevronIcon,
  Content,
  SearchBox,
  InputSearch,
  IconSearch,
  ConfirmButton,
} from './styles';

interface Address {
  cep: string | number;
  city: string;
  state: string;
  neighborhood: string;
  street: string;
}

const LocationDetails: React.FC = (props) => {
  const { navigate, goBack } = useNavigation();
  const [addressNumber, setAddressNumber] = useState();
  const [address, setAddress] = useState<Address>();

  useEffect(() => {
    // console.log('entrei aqui');
    // console.log(props.route.params);
    setAddress(props.route.params);
  }, [props.route.params]);

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#FD9E63',
          height: Platform.OS === 'ios' ? 80 : 34,
        }}
      >
        <Header>
          <SelectionButton onPress={() => goBack()}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>
          <StatusBar backgroundColor="#FD9E63" barStyle="light-content" />
          <StartusBarText>Endereço de entrega</StartusBarText>
          <SelectionButton onPress={() => navigate('DateTime')}>
            <ChevronIcon name="chevron-right" size={22} />
          </SelectionButton>
        </Header>
        <Content>
          {address && (
            <View>
              <Text>{address.street}</Text>
              <Text>{address.city}</Text>
              <Text>{address.state}</Text>
              <Text>{address.neighborhood}</Text>
              <Text>{address.cep}</Text>
              <TextInput
                onChangeText={() => setAddressNumber(addressNumber)}
                style={{ margin: 11 }}
                placeholder="número"
              >
                {addressNumber}
              </TextInput>
            </View>
          )}
        </Content>
      </View>
    </Container>
  );
};

export default LocationDetails;
