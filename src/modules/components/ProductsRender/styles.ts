import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
`;

export const ProductImg = styled.Image`
  width: 25%;
  height: 100px;
  border-radius: 5px;
  margin: 10px;
`;

export const SectionSeparator = styled.TouchableOpacity`
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const LineSeparator = styled.View`
  height: 1px;
  width: 390px;
  margin: 0 10px 10px 10px;
  border: 0.3px;
  opacity: 0.2;
  border-color: #999;
`;

export const ProductText = styled.Text`
  flex-flow: row wrap;
  width: 230px;
  color: #666;
  margin: 0 0 0 10px;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
`;

export const ProductValue = styled.Text``;

export const NavigationButton = styled.TouchableOpacity`
  margin-right: 15px;
`;
