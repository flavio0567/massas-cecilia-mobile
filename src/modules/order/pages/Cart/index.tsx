import React, { useState } from 'react';

import { connect } from 'react-redux';
import { View, StatusBar, Platform, TextInput } from 'react-native';

import {
  Container,
  Header,
  LineSeparator,
  SelectionButton,
  ChevronIcon,
  StartusBarText,
  ProductText,
  ButtonContainer,
  ButtonSelection,
  DeleteIcon,
  ButtonText,
  QuantityView,
  PlusText,
  MinusText,
  AddRemoveButton,
  ListProducts,
  Product,
  ProductItem,
} from './styles';

const Cart: React.FC = ({ navigation, route, cart, cartSize }: any) => {
  const { navigate } = navigation;
  const { params } = route;
  const [value, setValue] = useState(1);
  console.tron.log(params);

  function handlePlusMinusButton(e: number): void {
    if (value >= 1 && e === 1) {
      setValue(value + e);
    } else if (value === 1 && e === 1) {
      setValue(1);
    }
  }

  function handleCloseOrder() {
    console.tron.log(cart);
  }

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#e76c22',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectionButton onPress={() => navigate(params.caller)}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#e76c22"
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
          <ProductText>Detalhes do pedido</ProductText>
        </LineSeparator>
        <ProductText>Retirar na loja</ProductText>
        <ProductText>Hoje às 16:30h</ProductText>
        <LineSeparator>
          <ProductText>Detalhes do pedido</ProductText>
        </LineSeparator>
        <ListProducts>
          {cart.map((product) => (
            <ProductItem>
              <Product key={product.code}>{product.name}</Product>

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

              <SelectionButton onPress={() => navigate('Order')}>
                <DeleteIcon name="trash-2" size={22} />
              </SelectionButton>
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
          <ButtonText onPress={() => handleCloseOrder()}>
            Encerrar o pedido
          </ButtonText>
          <ButtonText>R$ 459,00</ButtonText>
        </ButtonSelection>
      </ButtonContainer>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Cart);
