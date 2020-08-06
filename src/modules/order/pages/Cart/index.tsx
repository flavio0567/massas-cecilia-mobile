import React, { useState } from 'react';

import { connect, useDispatch } from 'react-redux';
import { View, StatusBar, Platform, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useAuth } from '../../../../shared/hooks/auth';

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
  Product,
  ProductItem,
} from './styles';

interface CartProps {
  cart: string;
  cartSize: string;
  product: string;
}

const Cart: React.FC = ({ navigation, route, cart }: any) => {
  const { navigate } = navigation;
  const { user, loading } = useAuth();
  const dispatch = useDispatch();

  const { params } = route;
  const [value, setValue] = useState(1);

  function handlePlusMinusButton(e: number): void {
    if (value >= 1 && e === 1) {
      setValue(value + e);
    } else if (value === 1 && e === 1) {
      setValue(1);
    }
  }

  function handleCloseOrder(): void {
    dispatch({
      type: 'ADD_TO_CART',
      cart,
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
              <Product>{product.name}</Product>

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

              <SelectionButton onPress={() => navigate('Success')}>
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

const mapStateToProps = (state: any): CartProps => ({
  cart: state.cart,
  cartSize: state.cart.length,
  product: state.product,
});

export default connect(mapStateToProps)(Cart);
