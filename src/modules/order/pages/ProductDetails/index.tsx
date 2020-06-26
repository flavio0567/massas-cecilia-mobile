import React, { useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';

import { View, StatusBar, Platform, ScrollView, TextInput } from 'react-native';
import { Badge, withBadge } from 'react-native-elements';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
  Container,
  Header,
  ChevronIcon,
  StartusBarText,
  CartIcon,
  ProductText,
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

const ProductDetails: React.FC = ({ navigation, route }) => {
  const { name, sales_price, caller } = route.params;
  const { navigate } = navigation;
  const [value, setValue] = useState(1);

  const formRef = useRef<FormHandles>(null);

  const [checked, setChecked] = useState(false);

  function handlePlusMinusButton(e: number): void {
    if (value >= 1 && e === 1) {
      setValue(value + e);
    } else if (value === 1 && e === 1) {
      setValue(1);
    }
  }

  const handleAddProduct = () => {};

  // dispatch({
  //   type: 'ADD_TO_CART',
  //   product,
  // });
  return (
    <Container>
      <View
        style={{
          backgroundColor: '#ff9000',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectionButton
            onPress={() => {
              navigate(caller);
            }}
          >
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#ff9000"
            barStyle="light-content"
          />
          <StartusBarText>Adicionar item ao pedido</StartusBarText>
          <SelectionButton
            onPress={
              () => {
                navigate(caller);
              }
              // () => navigate('OrderDetails', { caller: 'ProductDetails' })
            }
          >
            <CartIcon name="shopping-cart" size={22} />
          </SelectionButton>
        </Header>
      </View>
      <ScrollView>
        <ProductText>{name}</ProductText>
        {/* <ComplementText>500gr/100 cal</ComplementText> */}
        <ProductText>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sales_price)}
        </ProductText>

        <Form ref={formRef} onSubmit={() => console.tron.log(value)}>
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
            handleAddProduct();
          }}
        >
          <ButtonText>Confirmar</ButtonText>
          <ButtonText>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(sales_price)}
          </ButtonText>
        </ButtonSelection>
      </ButtonContainer>
    </Container>
  );
};

export default connect()(ProductDetails);
