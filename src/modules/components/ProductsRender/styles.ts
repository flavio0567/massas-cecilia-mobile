import styled from 'styled-components/native';

export const Container = styled.View`
  /* padding-top: 80px; */
`;

export const SectionSeparator = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LineSeparator = styled.View`
  height: 2px;
  width: 390px;
  margin: 0 10px 10px 10px;
  border: 1px;
  border-color: #999;
`;

export const ProductText = styled.Text`
  color: #666;
  font-size: 16px;
  margin-right: 140px;
  font-family: 'RobotoSlab-Medium';
`;

export const NavigationButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  top: 10px;
  margin-right: 10px;
`;

export const ProductImg = styled.Image`
  width: 30%;
  height: 110px;
  border-radius: 5px;
  margin: 20px;
`;
