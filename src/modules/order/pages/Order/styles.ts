import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  /* padding-top: 20px; */
`;

export const Header = styled.SafeAreaView`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const SelectionButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const ChevronIcon = styled(Icon)`
  margin-left: 10px;
  color: #fff;
`;

export const CartIcon = styled(Icon)`
  margin-right: 20px;
  color: #fff;
`;

export const StartusBarText = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;

export const ProductImage = styled.Image`
  width: 170px;
  height: 150px;
  border-radius: 5px;
`;

export const ItemContainer = styled.View`
  flex-flow: row wrap;
  justify-content: space-around;

  padding: 0;
  margin: 0;
`;

export const ProductButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const FamilyProductText = styled.Text`
  color: #666;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;
