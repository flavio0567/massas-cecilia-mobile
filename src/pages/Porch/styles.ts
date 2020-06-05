import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  top: 740px;
`;

export const ButtonSelection = styled(RectButton)`
  width: 40%;
  height: 50px;
  background: transparent;
  border: 1px;
  border-color: #ff9000;
  border-radius: 4px;
  margin: 20px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #ff9000;
  font-size: 18px;
`;

export const GuestSelection = styled.TouchableOpacity`
  margin-left: 130px;
  top: 740px;

  flex-direction: row;
  align-items: center;
`;

export const GuestText = styled.Text`
  color: #ff9000;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
