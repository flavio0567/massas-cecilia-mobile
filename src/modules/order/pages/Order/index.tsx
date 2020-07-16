import React, { useEffect, useState, useCallback } from 'react';

import { Badge } from 'react-native-elements';
import { View, StatusBar, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import massasImg from '../../../assets/capelete.png';

import api from '../../../../shared/service/api';

import {
  Container,
  Header,
  SelectionButton,
  ChevronIcon,
  CartIcon,
  StartusBarText,
  ProductList,
  FamilyProductText,
  ProductImage,
  ProductContainer,
} from './styles';

export interface Product {
  id: string;
  name: string;
  product_family: number;
}

const Order: React.FC = ({ cartSize }: any) => {
  const { navigate } = useNavigation();

  const [familyProducts, setFamilyProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('products/family').then((response) => {
      const { product } = response.data;
      setFamilyProducts(product);
    });
  }, []);

  const navigateToMenu = useCallback(
    (product_family: number, name: string) => {
      navigate('Menu', { product_family, name });
    },
    [navigate],
  );

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#e76c22',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectionButton onPress={() => navigate('Order')}>
            <ChevronIcon name="trash-2" size={22} />
          </SelectionButton>

          <StartusBarText>Menu</StartusBarText>
          <SelectionButton onPress={() => navigate('Cart', { caller: 'Menu' })}>
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
            <CartIcon name="shopping-cart" size={24} />
          </SelectionButton>
        </Header>
      </View>

      <ProductList
        data={familyProducts}
        numColumns={2}
        keyExtractor={(item) => `key${item.id}`}
        renderItem={({ item: familyProduct }) => (
          <ProductContainer
            onPress={() =>
              navigateToMenu(familyProduct.product_family, familyProduct.name)
            }
          >
            <ProductImage width={42} source={massasImg} />
            <FamilyProductText>{familyProduct.name}</FamilyProductText>
          </ProductContainer>
        )}
      />
    </Container>
  );
};

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Order);
