import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

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
  z-index: -1;
`;

export const NavigationButton = styled.TouchableOpacity`
  margin-right: 15px;
`;

export const SelectionButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const SectionSeparator = styled.View`
  flex-flow: row wrap;
  justify-content: space-between;
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
  flex-flow: row wrap;
  margin: 20px 20px 0;
  color: #666;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const ComplementText = styled.Text`
  margin: 10px 20px 10px;
  color: #666;
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
`;
