import React, { useState, useEffect } from 'react';

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

const Menu: React.FC = ({ navigation, route }: any) => {
  const { product_family } = route.params;
  const { navigate } = navigation;

  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@TorreNegra:token',
        '@TorreNegra:user',
      ]);

      async function loadProducts(): Promise<any> {
        const response = await api.get('products');
        // console.log('responde.data ', response.data);
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

          <SelectionButton
            onPress={() => navigate('OrderDetails', { caller: 'Menu' })}
          >
            <View>
              <Badge
                status="error"
                value={quantity}
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
export default Menu;
