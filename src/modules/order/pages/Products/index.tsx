import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { Badge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { View, StatusBar, Platform, FlatList } from 'react-native';

import api from '../../../../shared/service/api';

import {
  Container,
  Header,
  ChevronIcon,
  StartusBarText,
  CartIcon,
  SelectionButton,
  SectionSeparator,
  LineSeparator,
  ProductText,
  ComplementText,
  NavigationButton,
} from './styles';

interface Product {
  code: string;
  name: string;
  sales_price: number;
  product_family: number;
  sub_category: number;
}

const Products: React.FC = ({ navigation, route, cartSize }: any) => {
  const { product_family, category } = route.params;

  const { navigate } = navigation;

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts(): Promise<any> {
      const response = await api.get('products/category', {
        params: {
          product_family,
          category,
        },
      });

      setProducts(response.data);
    }

    loadProducts();

    setLoading(false);
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
          <SelectionButton onPress={() => navigate('Menu')}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#ff9000"
            barStyle="light-content"
          />
          <StartusBarText>Selecione um produto</StartusBarText>
          <SelectionButton
            onPress={() => navigate('Cart', { caller: 'Products' })}
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
      <FlatList
        data={products}
        keyExtractor={(item: Product) => String(item.code)}
        renderItem={({ item }) => (
          <SectionSeparator>
            <View>
              <ProductText>{item.name}</ProductText>
              <ComplementText>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.sales_price)}
              </ComplementText>
            </View>

            <NavigationButton
              onPress={() => {
                navigate('ProductDetails', {
                  code: item.code,
                  name: item.name,
                  sales_price: item.sales_price,
                  caller: 'Products',
                });
              }}
            >
              <Icon name="chevron-right" size={22} color="#666" />
            </NavigationButton>
            <LineSeparator />
          </SectionSeparator>
        )}
      />
    </Container>
  );
};

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Products);
