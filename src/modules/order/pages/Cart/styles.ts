import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #fff5e6;
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

export const ProductLabelText = styled.Text`
  flex-flow: row wrap;
  margin: 0px 10px 0;
  color: #3f3f3f;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  padding: 10px;
`;

export const ProductText = styled.Text`
  flex-flow: row wrap;
  margin: 2px 10px 0;
  color: #3f3f3f;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  padding: 10px;
`;

export const QuantityView = styled.View`
  flex-direction: row;
`;

export const AddRemoveButton = styled(RectButton)`
  width: 20px;
  height: 20px;
  background: #fd9e63;
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
  height: 490px;
`;

export const ProductItem = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const Product = styled.Text`
  width: 220px;
  flex-flow: row wrap;
  margin: 10px 22px 0;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: #3f3f3f;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonSelection = styled(RectButton)`
  width: 80%;
  height: 50px;
  background: #fd9e63;
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
  color: #fd9e63;
`;

export const DeleteButton = styled(RectButton)`
  width: 8%;
  height: 30px;
`;

export const AddInformation = styled.Text`
  font-size: 12px;
`;
