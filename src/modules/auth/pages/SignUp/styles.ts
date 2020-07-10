import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Button from '../../../../shared/components/Button';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #9a948c;
  font-family: 'RobotoSlab-Medium';
  margin: 20px 0 70px;
`;

export const Image = styled.Image`
  margin: 40px 0;
  width: 340px;

  height: 250px;
  width: 120px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;

export const TextOptional = styled.Text`
  left: 50px;
  bottom: 0;
  right: 0;
  color: #9a948c;
  margin-left: -360px;

  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const RegisterButton = styled(Button)`
  margin-top: 20px;
`;

export const ReturnButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  top: 20px;
  margin: 10px;
`;

export const ReturnButtonText = styled.Text`
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: #e76c22;
`;

export const Agreement = styled.View`
  align-items: center;
  justify-content: center;

  flex-direction: row;
  margin-bottom: 20px;
  margin: 20px;
`;

export const CheckBoxAgreement = styled.TouchableWithoutFeedback``;

export const Checkbox = styled.Text`
  height: 16px;
  width: 16px;
  border-radius: 4px;
  align-self: center;
  border-width: 1px;
  border-color: #666360;
`;

export const TextAgreement = styled.Text`
  font-size: 13px;
  color: #666;
  margin: 15px;
`;
