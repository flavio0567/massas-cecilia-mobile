import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../../../shared/service/api';
import { useAuth } from '../../../../shared/hooks/auth';

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
  neighborhood: string;
  state: string;
  street: string;
}

const Location: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [userCep, setUserCep] = useState<string>();
  const [userAddress, setUserAddress] = useState<Address>();

  let newCep;

  const handleSearch = useCallback(async () => {
    setLoading(true);
    await api
      .get<Address>('address', { params: { userCep } })
      .then((response) => {
        const { name } = response.data;
        console.log('erroEncontrado:', response.data);
        setUserAddress(response.data);
        navigate('LocationDetails', userAddress);
      })
      .catch(() => {
        Alert.alert('Cep não encontrado, tente novamente.');
      });
    setLoading(false);
  }, [userCep, navigate, userAddress]);

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
          <SearchBox>
            <InputSearch
              autoCorrect={false}
              textContentType="none"
              value={newCep}
              placeholder="informe o cep"
              onChangeText={(e) => setUserCep(e)}
            />
            <IconSearch name="search" />
          </SearchBox>
          {/* <View>
            <Text>{userAddress?.street}</Text>
            <Text>{userAddress?.city}</Text>
            <Text>{userAddress?.state}</Text>
            <Text>{userAddress?.neighborhood}</Text>
            {userAddress?.street && (
              <TextInput
                onChangeText={() => setAddressNumber(addressNumber)}
                style={{ margin: 11 }}
                placeholder="número"
              >
                {addressNumber}
              </TextInput>
            )}
          </View> */}
          {/* <ConfirmButton onPress={handleSearch}> */}
          <ConfirmButton
            // onPress={() => navigate('LocationDetails', userAddress)}
            onPress={handleSearch}
          >
            <StartusBarText>Buscar</StartusBarText>
          </ConfirmButton>
        </Content>
      </View>
    </Container>
  );
};

export default Location;
