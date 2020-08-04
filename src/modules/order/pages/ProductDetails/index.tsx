import React, { useState, useRef, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';

import { Badge } from 'react-native-elements';
import { View, StatusBar, Platform, TextInput } from 'react-native';

import api from '../../../../shared/service/api';
import {
  Container,
  Header,
  ChevronIcon,
  StartusBarText,
  CartIcon,
  ProductText,
  SelectionButton,
  LineSeparator,
  QuantityView,
  PlusText,
  MinusText,
  AddRemoveButton,
  AddInformation,
  ButtonContainer,
  ButtonSelection,
  ButtonText,
} from './styles';

const ProductDetails: React.FC = ({ navigation, route, cartSize }: any) => {
  const product = route.params;
  const { name, sales_price, caller, product_family, category } = product;
  const { navigate } = navigation;
  const dispatch = useDispatch();

  useEffect(() => {
    console.tron.log(
      'product details:',
      name,
      sales_price,
      caller,
      product_family,
      category,
    );
    if (name === undefined) {
      api
        .get('products/category', { params: { product_family, category } })
        .then((response) => {
          console.tron.log('response.data:', response.data);
        });
    }
  }, [caller, name, category, product_family, sales_price]);

  const [value, setValue] = useState(1);

  function handlePlusMinusButton(e: number): void {
    if (value >= 1 && e === 1) {
      setValue(value + e);
    } else if (value === 1 && e === 1) {
      setValue(1);
    }
  }

  function handleAddProduct(): void {
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  }

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#FD9E63',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          {name ? (
            <SelectionButton
              onPress={() => {
                navigate(caller);
              }}
            >
              <ChevronIcon name="chevron-left" size={22} />
            </SelectionButton>
          ) : (
            <SelectionButton
              onPress={() => {
                navigate('Menu');
              }}
            >
              <ChevronIcon name="chevron-left" size={22} />
            </SelectionButton>
          )}
          <StatusBar
            translucent
            backgroundColor="#FD9E63"
            barStyle="light-content"
          />
          <StartusBarText>Adicionar item ao pedido</StartusBarText>
          <SelectionButton
            onPress={() => navigate('Cart', { caller: 'ProductDetails' })}
          >
            <Badge
              status="error"
              value={cartSize}
              containerStyle={{
                position: 'absolute',
                top: -4,
                right: 12,
                opacity: 0.8,
              }}
            />
            <CartIcon name="shopping-cart" size={22} />
          </SelectionButton>
        </Header>
      </View>
      <View>
        <ProductText>{name}</ProductText>
        <ProductText>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(sales_price)}
        </ProductText>

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

        <LineSeparator />

        <AddInformation>
          Informações adicionais sobre o produto, quando necessáriom podem ser
          solicitadas.
        </AddInformation>
      </View>

      <ButtonContainer>
        <ButtonSelection
          onPress={() => {
            handleAddProduct();
          }}
        >
          <ButtonText onPress={() => handleAddProduct()}>Confirmar</ButtonText>
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

export default connect((state) => ({
  cartSize: state.cart.length,
}))(ProductDetails);
