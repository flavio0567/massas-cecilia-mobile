import React, { useCallback, useState } from 'react';
import { View, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import api from '../../../../shared/service/api';

import * as OrderActions from '../../../../store/modules/order/actions';

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

export interface Address {
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
  const [addressComplement, setAddressComplement] = useState();

  const dispatch = useDispatch();

  const handleConfirmLocation = useCallback(() => {
    let address = userAddress;
    address += ', ';
    address += addressNumber;
    address += ' ';
    address += addressComplement;

    console.log(userAddress);
    dispatch({
      type: '@order/ADD_ADDRESS',
      address,
    });

    navigate('MainStack');
  }, [addressNumber, userAddress, dispatch, navigate, addressComplement]);

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
                  onChangeText={() => setAddressComplement(addressComplement)}
                  autoCorrect={false}
                >
                  {addressComplement}
                </AddressComplementInput>
              </AddressNumberView>
            </AddressView>
          )}
          <ConfirmButton onPress={handleConfirmLocation}>
            <ConfirmText>Confirme o Endereço</ConfirmText>
          </ConfirmButton>
        </Content>
      </View>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(OrderActions, dispatch);

export default connect(null, mapDispatchToProps)(LocationDetails);
