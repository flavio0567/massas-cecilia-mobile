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
`;

export const ProductSection = styled.View`
  flex-direction: row;

  justify-content: space-between;
  padding: 10px;
`;

export const NavigationButton = styled.TouchableOpacity`
  flex-direction: row;

  top: 25px;
  margin: 10px;
`;

export const SelectionButton = styled.TouchableOpacity`
  padding: 5px;
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
