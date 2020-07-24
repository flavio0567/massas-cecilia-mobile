import React from 'react';
import { ImageBackground, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import massasImg from '../../../assets/massas_wood_background.png';
import logoImg from '../../../assets/wheat.png';

import {
  ButtonContainer,
  ButtonSelection,
  ButtonText,
  Title,
  SubTitle,
  TitleView,
} from './styles';

const Main: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <ImageBackground
      source={massasImg}
      style={{ width: '100%', height: '100%' }}
    >
      <Image
        source={logoImg}
        style={{
          width: '100%',
          height: '40%',
          position: 'absolute',
          top: 40,
        }}
      />

      <TitleView>
        <Title>Crie seu pedido</Title>
        <SubTitle>escolha uma das opções abaixo</SubTitle>
      </TitleView>

      <ButtonContainer>
        <ButtonSelection
          onPress={() => {
            navigate('Order');
          }}
        >
          <ButtonText>Retirar na Loja</ButtonText>
        </ButtonSelection>

        <ButtonSelection
          onPress={() => {
            // navigate('Location');
            navigate('DateTime');
          }}
        >
          <ButtonText>Delivery</ButtonText>
        </ButtonSelection>
      </ButtonContainer>
    </ImageBackground>
  );
};

export default Main;
