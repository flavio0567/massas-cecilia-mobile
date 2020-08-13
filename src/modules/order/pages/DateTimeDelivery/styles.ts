import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

interface HourProps {
  available: boolean;
}

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

export const ContentDateTime = styled.ScrollView``;

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

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const ScheduleText = styled.Text`
  font-size: 18px;
  color: #999591;
  font-family: 'RobotoSlab-Medium';
  margin: 0 24px 12px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled.View<HourProps>`
  padding: 12px;
  background: #efc06e;
  /* background: #3e3b47; */
  border-radius: 10px;
  margin-right: 8px;

  opacity: ${(props) => (props.available ? 1 : 0.3)};
`;

export const HourText = styled.Text`
  color: #f4ede8;
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
`;
