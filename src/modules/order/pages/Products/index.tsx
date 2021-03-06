import React, { useEffect, useState, useCallback } from 'react';
import { Badge } from 'react-native-elements';

import { connect } from 'react-redux';

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
  SearchBox,
  InputSearch,
  IconSearch,
} from './styles';

interface Product {
  code: string;
  name: string;
  avatar_url: HTMLImageElement;
  sales_price: number;
  product_family: number;
  sub_category: number;
}

const Products: React.FC = ({ navigation, route, cartSize }: any) => {
  const { product_family, category, code } = route.params;
  const { navigate, goBack } = navigation;

  const [products, setProducts] = useState<Product[]>([]);

  const [selected, setSelected] = useState<Product[]>();

  useEffect(() => {
    api
      .get('products/sub-category', { params: { product_family, category } })
      .then((response) => {
        if (Object.keys(response.data).length === 0) {
          navigate('ProductDetails', {
            product_family,
            category,
            code,
            caller: 'Products',
          });
        }
        setProducts(response.data);
        setSelected(response.data);
      });
  }, [category, product_family, navigate, code]);

  const handleSearch = useCallback(
    (text: string) => {
      const query = text.toLowerCase();
      const newSelection = products?.filter(
        (prod) => prod.name.toLowerCase().indexOf(query) > -1,
      );

      setSelected(newSelection);
    },
    [products],
  );

  return (
    <Container>
      <View
        style={{
          backgroundColor: '#FD9E63',
          height: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight,
        }}
      >
        <Header>
          <SelectionButton onPress={() => goBack()}>
            <ChevronIcon name="chevron-left" size={22} />
          </SelectionButton>

          <StatusBar
            translucent
            backgroundColor="#FD9E63"
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

      <SearchBox>
        <InputSearch
          autoCorrect={false}
          textContentType="none"
          onChangeText={(text) => handleSearch(text)}
        />
        <IconSearch name="search" />
      </SearchBox>

      <FlatList
        data={selected}
        keyExtractor={(item: Product) => String(item.code)}
        renderItem={({ item }) => (
          <SectionSeparator
            onPress={() => {
              navigate('ProductDetails', {
                code: item.code,
                name: item.name,
                sales_price: item.sales_price,
                caller: 'Products',
              });
            }}
          >
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
