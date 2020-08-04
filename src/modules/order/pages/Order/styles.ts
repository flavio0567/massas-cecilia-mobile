import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Product } from '.';

export const Container = styled.View`
  flex: 1;
  background: #fff5e6;
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
  z-index: -1;
`;

export const StartusBarText = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  padding: 24px 16px;
`;

export const ProductContainer = styled(RectButton)`
  width: 180px;
  height: 180px;
  background: #fff;

  margin: 6px;
  border-radius: 6px;
  border: 0.5px solid #ffe0b3;
`;

export const ProductImage = styled.Image`
  width: 180px;
  height: 130px;
`;

export const FamilyProductText = styled.Text`
  color: #666;
  font-size: 16px;
  width: 150px;
  color: #fd9e63;
  font-family: 'RobotoSlab-Regular';
  margin-left: auto;
`;
