import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

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
  height: 500px;
`;

export const ProductItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  margin: 8px 8px 5px;
  border-radius: 4px;
`;

export const ProductDetailText = styled.Text`
  width: 200px;
  flex-flow: row wrap;

  padding: 5px 5px;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  color: #3f3f3f;
`;

export const QuantityView = styled.View`
  flex-direction: row;
  width: 80px;
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
  margin: 6px;
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

export const SubTotalView = styled.View`
  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const SubTotalLabel = styled.Text`
  font-size: 10px;
  font-family: 'RobotoSlab-Medium';
  color: #999;
  padding: 4px;
`;

export const TotalText = styled.Text`
  font-size: 12px;
  margin-right: 10px;
  padding: 8px 0 5px;
`;

export const TextProdAmount = styled.Text`
  width: 48px;
  font-size: 12px;
  padding: 16px;
`;

export const RemoveItemButton = styled.TouchableOpacity`
  margin-right: 10px;
`;
