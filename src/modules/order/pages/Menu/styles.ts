import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { FlatList } from 'react-native-gesture-handler';

import Product from './index';

export const Container = styled.View`
  flex: 1;
  background: #fff5e6;
`;

export const BannerView = styled.View``;

export const BannerText = styled.Text`
  font-size: 23px;
  font-family: 'RobotoSlab-Regular';
  color: #fd9e63;

  margin: -55px 40px 30px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 80px;
  border-radius: 5px;
  opacity: 0.3;
`;

export const ChevronIcon = styled(Icon)`
  margin-left: 10px;
  color: #fff;
`;

export const Header = styled.SafeAreaView`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const SelectionButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const StartusBarText = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;

export const CartIcon = styled(Icon)`
  margin-right: 20px;
  color: #fff;
  z-index: -1;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  /* padding: 6px 10px 12px;

  flex-direction: row;
  padding-right: 10px; */
`;

export const ProductImg = styled.Image`
  width: 30%;
  height: 110px;
  border-radius: 5px;
  margin: 20px;
`;

export const ProductText = styled.Text`
  color: #666;
  font-size: 16px;
  margin-right: 140px;
  font-family: 'RobotoSlab-Regular';
`;

export const NavigationButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  top: 10px;
  margin-right: 10px;
`;
