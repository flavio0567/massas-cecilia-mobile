import styled from 'styled-components/native';

export const Container = styled.View``;

export const Item = styled.View`
  flex-direction: row;
`;
export const ProductImg = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin: 10px;
`;

export const FamilyProductText = styled.Text`
  color: #666;
  font-size: 12px;
  max-width: 152px;
  font-family: 'RobotoSlab-Regular';
`;

export const ProductValue = styled.Text``;

export const NavigationButton = styled.TouchableOpacity`
  margin-right: 15px;
  flex-flow: row wrap;
`;
