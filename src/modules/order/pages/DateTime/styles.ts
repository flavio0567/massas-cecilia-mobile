import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

export const StartusBarText = styled.Text`
  font-size: 18px;
  flex: 1;
  margin: 0 94px 10px;

  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;

export const Container = styled.View`
  flex: 1;
  background: #fff5e6;
`;

export const Header = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BannerView = styled.View``;

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

export const SelectButton = styled.TouchableOpacity`
  padding: 5px;
  top: -5px;
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fd9e63;
  font-size: 22px;
  margin: 0 26px;
  padding: 26px;
`;

export const OpenDataPickerButton = styled(RectButton)`
  height: 46px;
  background: #fd9e63;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 40px 24px;
`;

export const OpenDataPickerButtonText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #232129;
`;

export const DateTimeSection = styled.View``;

export const ConfirmButton = styled(RectButton)`
  position: absolute;
  top: 460px;
  height: 46px;
  background: #fd9e63;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 100px 24px;
  width: 365px;
`;
