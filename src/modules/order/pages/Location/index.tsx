import React, { useCallback, useState } from 'react';
import { View, StatusBar, Platform, Alert } from 'react-native';
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
  CleanSearch,
  IconClose,
  ConfirmButton,
  ConfirmText,
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

  const [loading, setLoading] = useState(false);
  const [userCep, setUserCep] = useState<string>();

  const handleSearch = useCallback(async () => {
    setLoading(true);
    await api
      .get<Address>('address', {
        params: { userCep },
      })
      .then((response) => {
        navigate('LocationDetails', { userAddress: response.data });
      })
      .catch(() => {
        Alert.alert('Cep não encontrado, tente novamente.');
      });
    setLoading(false);
  }, [navigate, userCep]);

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
              value={userCep}
              placeholder="Pesquisar cep"
              onChangeText={(e) => setUserCep(e)}
            />
            <IconSearch name="search" />
            <CleanSearch onPress={() => setUserCep('')}>
              <IconClose name="x-circle" />
            </CleanSearch>
          </SearchBox>
          <ConfirmButton onPress={handleSearch}>
            <ConfirmText>Buscar</ConfirmText>
          </ConfirmButton>
        </Content>
      </View>
    </Container>
  );
};

export default Location;
