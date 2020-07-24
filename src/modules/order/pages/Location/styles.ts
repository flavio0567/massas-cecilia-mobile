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
  margin: 0 94px 10px;

  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;

export const BannerView = styled.View`
  height: 100px;
`;

export const BannerText = styled.Text`
  font-size: 24px;
  font-family: 'RobotoSlab-Regular';
  color: #e76c22;

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
  background: #fff;
  padding-left: 10px;
  /* align-content: center; */
`;

export const InputSearch = styled.TextInput`
  padding: 10px 28px 0px;
  font-size: 20px;
  line-height: 30px;
  font-family: 'RobotoSlab-Regular';
  width: 500px;
  max-height: 64px;
`;

export const IconSearch = styled(Icon).attrs({
  size: 18,
  color: '#ff9000',
})`
  position: absolute;
  top: 4px;
  padding: 10px;
`;

export const ConfirmButton = styled(RectButton)`
  position: absolute;
  top: 460px;
  height: 46px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 100px 24px;
  width: 365px;
`;
