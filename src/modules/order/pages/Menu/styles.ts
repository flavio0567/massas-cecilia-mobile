import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  /* padding-top: 80px; */
`;

export const BannerView = styled.View`
  /* flex-direction: row; */
`;

export const BannerText = styled.Text`
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  color: #ff9000;

  margin: -40px 40px 30px;
`;

export const BannerImage = styled.Image`
  width: 100%;
  height: 60px;
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

export const ProductList = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
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
  font-family: 'RobotoSlab-Medium';
`;

export const NavigationButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  top: 10px;
  margin-right: 10px;
`;
