import React, { useState, useEffect, useCallback } from 'react';

import { connect } from 'react-redux';

import { View, StatusBar, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Badge } from 'react-native-elements';

import bannerImg from '../../../assets/caneloni.png';
import ProductRender from '../../../components/ProductsRender';

import api from '../../../../shared/service/api';

import {
  Container,
  BannerView,
  BannerText,
  BannerImage,
  Header,
  SelectionButton,
  ChevronIcon,
  CartIcon,
  ProductList,
} from './styles';

export interface Product {
  id: string;
  name: string;
  sales_price: number;
  product_family: number;
  sub_category: number;
}

type Products = Product[];

interface RootState {
  cart: Product;
}

const Menu: React.FC = ({ navigation, route, cartSize }: any) => {
  const { product_family } = route.params;
  const { navigate } = navigation;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@TorreNegra:token',
        '@TorreNegra:user',
      ]);
    }

    api
      .get('products/category', {
        params: {
          product_family,
        },
      })
      .then((response) => {
        const { product } = response.data;
        setProducts(product);
      });

    loadStorageData();

    setLoading(false);
  }, [product_family]);

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
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#e76c22"
            barStyle="light-content"
          />

          <SelectionButton onPress={() => navigate('Cart', { caller: 'Menu' })}>
            <View>
              <Badge
                status="error"
                value={cartSize.length}
                containerStyle={{
                  position: 'absolute',
                  top: -8,
                  right: 8,
                  opacity: 0.8,
                }}
              />
              <CartIcon name="shopping-cart" size={22} />
            </View>
          </SelectionButton>
        </Header>
      </View>
      <BannerView>
        <BannerImage source={bannerImg} />
        <BannerText>Massas</BannerText>
      </BannerView>
      <ProductList
        data={products}
        keyExtractor={(item: Product) => String(item.id)}
        renderItem={({ item }) => <ProductRender data={item} />}
      />
    </Container>
  );
};
export default connect((state: RootState) => ({
  cartSize: state.cart,
}))(Menu);
