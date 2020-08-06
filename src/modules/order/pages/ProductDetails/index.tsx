import React, { useState, useEffect, useCallback } from 'react';
import { connect, useDispatch } from 'react-redux';

import { Badge } from 'react-native-elements';
import { View, StatusBar, Platform, TextInput } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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

interface Product {
  code: number;
  name: string;
  sales_price: number;
  amount: number;
}

const ProductDetails: React.FC = ({ navigation, route, cartSize }: any) => {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const [userToken, setUserToken] = useState();
  const [product, setProduct] = useState();

  const { code } = route.params;

  useEffect(() => {
    async function getProducName(): Promise<void> {
      const token = await AsyncStorage.getItem('@TorreNegra:token');

      setUserToken(token);
      console.log('this token ====>', token);
    }

    getProducName();
  }, []);

  useEffect(() => {
    if (product?.name === undefined) {
      console.log('token:', userToken);
      api
        .get(`products/code/${code}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          console.log('response.data:', response.data.product);
          setProduct(response.data.product);
        });
    }
  }, [code, userToken, product]);

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

    navigate('Order');
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
          {product?.name ? (
            <SelectionButton
              onPress={() => {
                navigate(product?.caller);
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
        <ProductText>{product?.name}</ProductText>
        <ProductText>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(product?.sales_price)}
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
            }).format(product?.sales_price)}
          </ButtonText>
        </ButtonSelection>
      </ButtonContainer>
    </Container>
  );
};

export default connect((state) => ({
  cartSize: state.cart.length,
}))(ProductDetails);
