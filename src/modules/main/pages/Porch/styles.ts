import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

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

export const ButtonSelection = styled.TouchableOpacity`
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
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 10px 0 ${10 + getBottomSpace()}px;

  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const GuestText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #ff9000;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 8px;
`;
