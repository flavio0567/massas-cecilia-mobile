import React, { useCallback, useState } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import api from '../../../../shared/service/api';

import {
  StartusBarText,
  Container,
  SelectionButton,
  Header,
  ChevronIcon,
  Content,
  AddressNumberInput,
  AddressComplementInput,
  AddressView,
  AddressText,
  AddressLabelText,
  IconLocation,
  AddressNumberView,
  ConfirmButton,
  ConfirmText,
} from './styles';

interface Address {
  cep: string | number;
  city: string;
  state: string;
  neighborhood: string;
  street: string;
}

const LocationDetails: React.FC = ({ route }: any) => {
  const { userAddress } = route.params;

  const { navigate, goBack } = useNavigation();
  const [addressNumber, setAddressNumber] = useState();
  const dispatch = useDispatch();

  const handleLocation = useCallback(() => {
    const address = {
      userAddress,
      addressNumber,
    };

    dispatch({
      type: 'ADD_TO_CART',
      address,
    });

    navigate('MainStack');
  }, [addressNumber, userAddress, dispatch, navigate]);

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
        </Header>
        <Content>
          {userAddress && (
            <AddressView>
              <IconLocation name="map-pin" />
              <AddressText>{userAddress.street}, </AddressText>
              <AddressText>
                {userAddress.city} - {userAddress.state} -{' '}
                {userAddress.neighborhood} - {userAddress.cep}
              </AddressText>

              <AddressNumberView>
                <AddressLabelText>Informe o número: </AddressLabelText>
                <AddressNumberInput
                  onChangeText={() => setAddressNumber(addressNumber)}
                  autoCorrect={false}
                  autoFocus
                >
                  {addressNumber}
                </AddressNumberInput>
              </AddressNumberView>

              <AddressNumberView>
                <AddressLabelText>Complemento: </AddressLabelText>
                <AddressComplementInput
                  onChangeText={() => setAddressNumber(addressNumber)}
                  autoCorrect={false}
                >
                  {addressNumber}
                </AddressComplementInput>
              </AddressNumberView>
            </AddressView>
          )}
          <ConfirmButton onPress={handleLocation}>
            <ConfirmText>Confirme o Endereço</ConfirmText>
          </ConfirmButton>
        </Content>
      </View>
    </Container>
  );
};

export default LocationDetails;
