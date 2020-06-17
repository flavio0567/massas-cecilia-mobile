import React, { useState, useRef, useCallback } from 'react';

import { View, StatusBar, Platform, ScrollView, TextInput } from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
  Container,
  Header,
  ChevronIcon,
  StartusBarText,
  CartIcon,
  ProductText,
  ComplementText,
  SelectionButton,
  LineSeparator,
  AddInformation,
  AddRemoveButton,
  ButtonContainer,
  ButtonSelection,
  ButtonText,
  MinusText,
  PlusText,
  QuantityView,
} from './styles';

const ProductDetails: React.FC = ({ navigation, route }: any) => {
  const { params } = route;
  const { navigate } = navigation;
  const [value, setValue] = useState(1);

  const formRef = useRef<FormHandles>(null);

  const [checked, setChecked] = useState(false);

  function handlePlusMinusButton(e: number): number {
    if (value >= 1 && e === 1) {
      setValue(value + e);
    } else if (value === 1 && e === 1) {
      setValue(1);
    }
  }

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#ff9000',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectionButton onPress={() => navigate('Products')}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#ff9000"
            barStyle="light-content"
          />
          <StartusBarText>Massas - Talharim</StartusBarText>
          <SelectionButton
            onPress={
              () => navigate('OrderDetails', { caller: 'ProductDetails' })
              // eslint-disable-next-line react/jsx-curly-newline
            }
          >
            <CartIcon name="shopping-cart" size={22} />
          </SelectionButton>
        </Header>
      </View>
      <ScrollView>
        <ProductText>Talharim com brócolis e bacon</ProductText>
        <ComplementText>500gr/100 cal</ComplementText>
        <ProductText>R$ 35,00 </ProductText>

        <Form ref={formRef} onSubmit={() => console.log(value)}>
          <QuantityView>
            <AddRemoveButton
              onPress={() => {
                handlePlusMinusButton(-1);
              }}
            >
              <MinusText>-</MinusText>
            </AddRemoveButton>

            <TextInput
              onChangeText={() => setValue(value)}
              style={{ margin: 11 }}
            >
              {value}
            </TextInput>
            <AddRemoveButton
              onPress={() => {
                handlePlusMinusButton(1);
              }}
            >
              <PlusText>+</PlusText>
            </AddRemoveButton>
          </QuantityView>
        </Form>

        <LineSeparator />

        <AddInformation>
          Informações adicionais sobre o produto, quando necessáriom podem ser
          solicitadas.
        </AddInformation>
      </ScrollView>

      <ButtonContainer>
        <ButtonSelection
          onPress={() => {
            navigate('Order');
          }}
        >
          <ButtonText>Adicionar ao pedido</ButtonText>
          <ButtonText>R$ 35,00</ButtonText>
        </ButtonSelection>
      </ButtonContainer>
    </Container>
  );
};

export default ProductDetails;
