import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #fff5e6;
`;

export const StartusBarText = styled.Text`
  font-size: 18px;
  flex: 1;
  margin: 0 78px 10px;

  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;

export const BannerView = styled.View`
  height: 100px;
`;

export const BannerText = styled.Text`
  font-size: 24px;
  font-family: 'RobotoSlab-Regular';
  color: #fd9e63;

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

export const Content = styled.View``;

export const SearchBox = styled.View`
  background: #e0e0e0;
  padding-left: 10px;
  border-radius: 8px;
  margin: 14px;
`;

export const InputSearch = styled.TextInput`
  padding: 10px 32px 10px;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  width: 500px;
  max-height: 64px;
  color: #3f3f3f;
`;

export const IconSearch = styled(Icon).attrs({
  size: 18,
  color: '#808080',
})`
  position: absolute;
  padding: 14px;
`;

export const CleanSearch = styled.TouchableOpacity``;

export const IconClose = styled(Icon).attrs({
  size: 18,
  color: '#808080',
})`
  position: absolute;
  top: -40px;
  right: 4px;
  padding: 10px;
`;

export const ConfirmButton = styled(RectButton)`
  position: absolute;
  top: 60px;
  height: 46px;
  background: #fd9e63;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 100px 24px;
  width: 365px;
`;

export const ConfirmText = styled.Text`
  font-size: 18px;
  flex: 1;
  margin: 10px 70px 10px;

  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;
