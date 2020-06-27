import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View``;

export const ChevronIcon = styled(Icon)`
  margin-left: 10px;
  color: #fff;
`;

export const Header = styled.SafeAreaView`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const StartusBarText = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;

export const CartIcon = styled(Icon)`
  margin-right: 20px;
  color: #fff;
`;

export const SelectionButton = styled.TouchableOpacity`
  padding: 5px;
  margin-right: 10px;
`;

export const SectionSeparator = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LineSeparator = styled.View`
  height: 40px;
  width: 100%;
  background-color: #dcdcdc;
`;

export const ProductText = styled.Text`
  flex-flow: row wrap;
  margin: 10px 10px 0;
  color: #ff9000;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;

export const QuantityView = styled.View`
  flex-direction: row;
`;

export const AddRemoveButton = styled(RectButton)`
  width: 20px;
  height: 20px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 12px;

  justify-content: center;
  align-items: center;
`;

export const MinusText = styled.Text`
  color: #fff;
`;

export const PlusText = styled.Text`
  color: #fff;
`;

export const ListProducts = styled(ScrollView)`
  width: 100%;
  height: 550px;
`;

export const ProductItem = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Product = styled.Text`
  width: 220px;
  flex-flow: row wrap;
  margin: 10px 10px 0;
  font-size: 12px;
  font-family: 'RobotoSlab-Regular';
`;

export const ButtonContainer = styled.View`
  padding: 20px 0 ${60 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
`;

export const ButtonSelection = styled(RectButton)`
  width: 80%;
  height: 50px;
  background: #ff9000;
  border-radius: 6px;
  margin: 10px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 16px;
  margin-right: 10px;
`;

export const DeleteIcon = styled(Icon)`
  margin-left: 10px;
  color: #ff9000;
`;

export const DeleteButton = styled(RectButton)`
  width: 8%;
  height: 30px;
`;

export const AddInformation = styled.Text`
  font-size: 12px;
`;
