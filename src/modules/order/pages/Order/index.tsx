import React from 'react';

import { View, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

// import bannerImg from '../../../assets/caneloni.png';
import massasImg from '../../../assets/capelete.png';
import molhosImg from '../../../assets/enroladinho.png';
import carnesImg from '../../../assets/bife_a_role.png';
import acompanhamentosImg from '../../../assets/cuscuz.png';

import {
  Container,
  Header,
  SelectionButton,
  ChevronIcon,
  CartIcon,
  StartusBarText,
  ProductImage,
  ItemContainer,
  ProductButton,
  FamilyProductText,
} from './styles';

const Order: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#ff9000',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectionButton onPress={() => navigate('Order')}>
            <ChevronIcon name="trash-2" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#ff9000"
            barStyle="light-content"
          />
          <StartusBarText>Menu</StartusBarText>
          <SelectionButton
            onPress={() => navigate('OrderDetails', { caller: 'Menu' })}
          >
            <CartIcon name="shopping-cart" size={24} />
          </SelectionButton>
        </Header>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <ItemContainer>
          <ProductButton
            onPress={() => {
              navigate('Menu', { product_family: 1 });
            }}
          >
            <ProductImage width={42} source={massasImg} />
            <FamilyProductText>Massas</FamilyProductText>
          </ProductButton>
          <ProductButton
            onPress={() => {
              navigate('Menu', { product_family: 2 });
            }}
          >
            <ProductImage width={42} source={molhosImg} />
            <FamilyProductText>Molhos</FamilyProductText>
          </ProductButton>
          <ProductButton
            onPress={() => {
              navigate('Menu', { product_family: 3 });
            }}
          >
            <ProductImage width={42} source={carnesImg} />
            <FamilyProductText>Carnes</FamilyProductText>
          </ProductButton>
          <ProductButton
            onPress={() => {
              navigate('Menu', { product_family: 4 });
            }}
          >
            <ProductImage width={42} source={acompanhamentosImg} />
            <FamilyProductText>Acompanhamentos</FamilyProductText>
          </ProductButton>
          <ProductButton
            onPress={() => {
              navigate('Menu', { product_family: 5 });
            }}
          >
            <ProductImage width={42} source={massasImg} />
            <FamilyProductText>Entradas</FamilyProductText>
          </ProductButton>
          <ProductButton
            onPress={() => {
              navigate('Menu', { product_family: 6 });
            }}
          >
            <ProductImage width={42} source={molhosImg} />
            <FamilyProductText>Sobremesas</FamilyProductText>
          </ProductButton>
          <ProductButton
            onPress={() => {
              navigate('Menu', { product_family: 7 });
            }}
          >
            <ProductImage width={42} source={molhosImg} />
            <FamilyProductText>Diversos</FamilyProductText>
          </ProductButton>
          <ProductButton
            onPress={() => {
              navigate('Menu', { product_family: 8 });
            }}
          >
            <ProductImage width={42} source={molhosImg} />
            <FamilyProductText>Bebidas</FamilyProductText>
          </ProductButton>
        </ItemContainer>
      </ScrollView>
    </Container>
  );
};

export default Order;
