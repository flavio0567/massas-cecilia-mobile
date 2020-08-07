import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Badge } from 'react-native-elements';
import { View, StatusBar, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import * as CartActions from '../../../../store/modules/cart/actions';

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

const ProductDetails: React.FC = ({
  navigation,
  route,
  cartSize,
  addToCart,
}: any) => {
  const { navigate } = navigation;
  const dispatch = useDispatch();
  const [userToken, setUserToken] = useState();
  const [product, setProduct] = useState();
  const [value, setValue] = useState(1);

  const { code } = route.params;

  useEffect(() => {
    async function getProducName(): Promise<void> {
      const token = await AsyncStorage.getItem('@TorreNegra:token');

      setUserToken(token);
    }

    getProducName();
  }, []);

  useEffect(() => {
    if (product?.name === undefined) {
      api
        .get(`products/code/${code}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        })
        .then((response) => {
          setProduct(response.data.product);
        });
    }
  }, [code, userToken, product]);

  function handlePlusMinusButton(e: number): void {
    if (value >= 1 && e === 1) {
      setValue(value + e);
    } else if (value === 1 && e === 1) {
      setValue(1);
    }
  }

  function handleAddProduct(): void {
    addToCart(product);

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

        <LineSeparator />

        <AddInformation>
          Informações adicionais sobre o produto, quando necessáriom podem ser
          solicitadas.
        </AddInformation>
      </View>

      <ButtonContainer>
        <ButtonSelection onPress={handleAddProduct}>
          <ButtonText>Confirmar</ButtonText>
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

const mapStateToProps = (state) => ({
  cartSize: state.cart.length,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
