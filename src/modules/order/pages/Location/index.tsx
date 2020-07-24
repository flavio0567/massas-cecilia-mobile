import React, { useCallback, useState } from 'react';
import { View, StatusBar, Platform } from 'react-native';
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

const Location: React.FC = () => {
  const { navigate, goBack } = useNavigation();
  const [userCep, setUserCep] = useState();
  const [address, setAddress] = useState();

  const handleSearch = useCallback(async () => {
    console.tron.log(userCep);
    api.get('address', { params: { userCep } }).then((response) => {
      console.tron.log(response.data);
    });
    // setAddress(useAddress);
  }, []);

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#e76c22',
          height: Platform.OS === 'ios' ? 80 : 34,
        }}
      >
        <Header>
          <SelectionButton onPress={() => goBack()}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>
          <StatusBar backgroundColor="#e76c22" barStyle="light-content" />
          <StartusBarText>Entragar em...</StartusBarText>
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
            />
            <IconSearch name="search" />
          </SearchBox>
          <ConfirmButton onPress={() => handleSearch}>
            <StartusBarText>Buscar</StartusBarText>
          </ConfirmButton>
        </Content>
      </View>
    </Container>
  );
};

export default Location;
