import React, { useState, useEffect } from 'react';
import { ImageBackground, Image } from 'react-native';

import logoImg from '../../assets/logo_massas.png';
import massasImg from '../../assets/massa_artesanal.png';

import {
  Container,
  ButtonContainer,
  ButtonSelection,
  ButtonText,
  GuestSelection,
  GuestText,
  Icon,
} from './styles';

// import api from '../../service/api';

const App: React.FC = () => {
  return (
    <Container>
      <ImageBackground
        source={massasImg}
        style={{ width: '100%', height: '100%' }}
      >
        <Image
          source={logoImg}
          style={{
            width: '100%',
            height: '50%',
            position: 'absolute',
            top: 40,
          }}
        />

        <ButtonContainer>
          <ButtonSelection
            onPress={() => {
              console.log('Entrar');
            }}
          >
            <ButtonText>Entrar</ButtonText>
          </ButtonSelection>

          <ButtonSelection
            onPress={() => {
              console.log('Cadastrar');
            }}
          >
            <ButtonText>Cadastrar</ButtonText>
          </ButtonSelection>
        </ButtonContainer>

        <GuestSelection
          onPress={() => {
            console.log('Guest');
          }}
        >
          <Icon name="log-in" size={20} color="#ff9000" />
          <GuestText>Continuar como visitante</GuestText>
        </GuestSelection>
      </ImageBackground>
    </Container>
  );
};

export default App;
