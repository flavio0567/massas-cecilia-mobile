import React, { useState } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { View, StatusBar, Platform, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../../../shared/hooks/auth';
import { formatPrice } from '../../../../util/format';

import * as CartActions from '../../../../store/modules/cart/actions';

import {
  Container,
  Header,
  LineSeparator,
  SelectionButton,
  ChevronIcon,
  StartusBarText,
  ProductText,
  ProductLabelText,
  ButtonContainer,
  ButtonSelection,
  DeleteIcon,
  ButtonText,
  QuantityView,
  PlusText,
  MinusText,
  AddRemoveButton,
  ListProducts,
  ProductDetailText,
  ProductItem,
  TotalText,
  SubTotalLabel,
  TextProdAmount,
  SubTotalView,
  RemoveItemButton,
} from './styles';

interface CartProps {
  cart: string;
  cartSize: string;
  subTotal: string;
  total: string;
}

interface Product {
  code: number;
  name: string;
  sales_price: number;
  amount: number;
}

const Cart: React.FC = ({
  navigation,
  route,
  cart,
  removeFromCart,
  updateAmount,
  total,
}: any) => {
  const { navigate } = navigation;
  const { user, loading } = useAuth();

  const { params } = route;
  const [value, setValue] = useState(1);

  function increment(product: Product): void {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product: Product): void {
    updateAmount(product.id, product.amount - 1);
  }

  function handleRemoveFromCart(id: string): void {
    removeFromCart(id);

    // navigate('Order');
  }

  function handleCloseOrder() {}

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#FD9E63',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectionButton onPress={() => navigate(params.caller)}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#FD9E63"
            barStyle="light-content"
          />
          <StartusBarText>Menu</StartusBarText>
          <SelectionButton onPress={() => navigate('Order')}>
            <ChevronIcon name="trash-2" size={22} />
          </SelectionButton>
        </Header>
      </View>

      <View>
        <LineSeparator>
          <ProductLabelText>Detalhes da entrega</ProductLabelText>
        </LineSeparator>

        {user ? (
          <ProductText>{user.name}</ProductText>
        ) : (
          <ProductText>
            Retirar na loja - <Icon name="map-pin" /> Avenida Prof. Adib Chaib,
            2926
          </ProductText>
        )}

        <ProductText>Hoje às 16:30h</ProductText>
        <LineSeparator>
          <ProductLabelText>Detalhes do pedido</ProductLabelText>
        </LineSeparator>
        <ListProducts>
          {cart.map((product: any) => (
            <ProductItem key={product.code}>
              <ProductDetailText>{product.name}</ProductDetailText>

              <QuantityView>
                <AddRemoveButton
                  onPress={() => {
                    decrement(product);
                  }}
                >
                  <MinusText>-</MinusText>
                </AddRemoveButton>

                <TextProdAmount>{product.amount}</TextProdAmount>
                <AddRemoveButton
                  onPress={() => {
                    increment(product);
                  }}
                >
                  <PlusText>+</PlusText>
                </AddRemoveButton>
              </QuantityView>

              <SubTotalView>
                <SubTotalLabel>Sub-total</SubTotalLabel>
                <TotalText>{product.subTotal}</TotalText>
              </SubTotalView>

              <RemoveItemButton
                onPress={() => handleRemoveFromCart(product.id)}
              >
                <DeleteIcon name="trash-2" size={18} />
              </RemoveItemButton>
            </ProductItem>
          ))}
        </ListProducts>
      </View>

      <ButtonContainer>
        <ButtonSelection
          onPress={() => {
            handleCloseOrder();
          }}
        >
          <ButtonText onPress={() => navigate('Success')}>
            Encerrar o pedido
          </ButtonText>
          <ButtonText>{total}</ButtonText>
        </ButtonSelection>
      </ButtonContainer>
    </Container>
  );
};

const mapStateToProps = (state: any): CartProps => ({
  cart: state.cart.map((product) => ({
    ...product,
    subTotal: formatPrice(product.sales_price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.sales_price * product.amount;
    }, 0),
  ),
  cartSize: state.cart.length,
});

const mapDispatchToProps = (dispatch: any): any =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
