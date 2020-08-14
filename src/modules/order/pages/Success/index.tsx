import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { ImageBackground, Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import massasImg from '../../../assets/almondega.png';
import logoImg from '../../../assets/wheat.png';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

const Success: React.FC = () => {
  const { reset } = useNavigation();

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: 'Main' }],
      index: 0,
    });
  }, [reset]);

  return (
    <ImageBackground
      source={massasImg}
      style={{ width: '100%', height: '100%', opacity: 0.7 }}
    >
      <Container>
        <Image
          source={logoImg}
          style={{
            width: '100%',
            height: '20%',
            position: 'absolute',
            top: 40,
          }}
        />
        <Icon name="check-circle" size={80} color="#04d361" />
        <Title> Compra concluída </Title>
        <Description>Terca, 14 de marco de 2020 as 12:00</Description>
        <OkButton onPress={() => {}}>
          <OkButtonText>Ok</OkButtonText>
        </OkButton>
      </Container>
    </ImageBackground>
  );
};

export default Success;
