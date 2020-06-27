import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { View, StatusBar, Platform, FlatList } from 'react-native';
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
} from './styles';

interface Product {
  id: string;
  name: string;
  sales_price: number;
  product_family: number;
  sub_category: number;
}

type Products = Product[];

const Menu: React.FC = ({ navigation, route, cartSize }: any) => {
  const { product_family } = route.params;
  const { navigate } = navigation;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@TorreNegra:token',
        '@TorreNegra:user',
      ]);

      async function loadProducts(): Promise<any> {
        const response = await api.get('products', {
          params: {
            product_family,
          },
        });

        setProducts(response.data);
      }

      loadProducts();

      setLoading(false);
    }
    loadStorageData();
  }, [product_family]);

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
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#ff9000"
            barStyle="light-content"
          />

          <SelectionButton onPress={() => navigate('Cart', { caller: 'Menu' })}>
            <View>
              <Badge
                status="error"
                value={cartSize}
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
      <FlatList
        data={products}
        keyExtractor={(item: Product) => String(item.id)}
        renderItem={({ item }) => <ProductRender data={item} />}
      />
    </Container>
  );
};
export default connect((state) => ({
  cartSize: state.cart.length,
}))(Menu);
