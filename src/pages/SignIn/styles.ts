import styled from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 60px 160px;
`;

export const SectionSeparator = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LineSeparator = styled.View`
  height: 2px;
  width: 140px;
  margin: 0 10px 0 10px;
  border: 1px;
  border-color: #ff9000;
`;

export const TextSeparator = styled.Text`
  color: #ff9000;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #ff9000;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 40px;
`;

export const Image = styled.Image`
  margin: 40px 0;
  width: 340px;

  height: 200px;
  width: 120px;
`;

export const GuestSelection = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  top: 20px;
  margin: 10px;
`;

export const GuestText = styled.Text`
  color: #ff9000;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 10px;
`;
