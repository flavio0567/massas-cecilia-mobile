import React from 'react';

import { StatusBar } from 'react-native';

import {
  Container,
  Header,
  LineSeparator,
  SelectionButton,
  ChevronIcon,
  StartusBarText,
} from './styles';

const OrderDetails: React.FC = ({ navigation, route }: any) => {
  const { navigate } = navigation;
  const { params } = route;

  return (
    <Container>
      <Header>
        <SelectionButton onPress={() => navigate(params.caller)}>
          <ChevronIcon name="chevron-left" size={22} />
        </SelectionButton>

        <StatusBar
          translucent
          backgroundColor="#ff9000"
          barStyle="light-content"
        />
        <StartusBarText>Menu</StartusBarText>
      </Header>
      <LineSeparator />
    </Container>
  );
};

export default OrderDetails;
