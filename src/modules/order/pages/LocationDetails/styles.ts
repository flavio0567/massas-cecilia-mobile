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

export const Content = styled.View`
  margin: 14px;
`;

export const AddressView = styled.View`
  border-radius: 5px;
  background: #9999;
  padding: 8px 10px 20px;
`;

export const AddressNumberInput = styled.TextInput`
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  width: 100px;
  height: 34px;
  color: #3f3f3f;
  border-radius: 5px;
  background: #e0e0e0;
`;

export const AddressComplementInput = styled.TextInput`
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  width: 200px;
  height: 38px;
  color: #3f3f3f;
  border-radius: 5px;
  background: #e0e0e0;
`;

export const AddressText = styled.Text`
  padding: 10px;
  font-size: 18px;
  line-height: 30px;
  height: 40px;
  font-family: 'RobotoSlab-Regular';
  color: #3f3f3f;
`;

export const AddressLabelText = styled.Text`
  padding: 10px;
  font-size: 16px;
  line-height: 30px;
  height: 40px;
  width: 158px;
  color: #ff9000;
  font-family: 'RobotoSlab-Regular';
  font-style: italic;
`;

export const IconLocation = styled(Icon).attrs({
  size: 20,
  color: '#808080',
})`
  padding: 10px 180px 10px;
`;

export const AddressDetailView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
`;

export const ConfirmButton = styled(RectButton)`
  position: absolute;
  top: 200px;
  height: 46px;
  background: #fd9e63;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 100px 12px;
  width: 365px;
`;

export const ConfirmText = styled.Text`
  flex: 1;
  margin: 10px;

  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  color: #fff;
`;
