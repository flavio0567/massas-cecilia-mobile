import React from 'react';

import Icon from 'react-native-vector-icons/Feather';
import { View, StatusBar, Platform } from 'react-native';

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
  ProductSection,
  NavigationButton,
} from './styles';

const Products: React.FC = ({ navigation, route }: any) => {
  const { params } = route;
  console.log(params.sub_category);
  const { navigate } = navigation;
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
            onPress={() => navigate('OrderDetails', { caller: 'Products' })}
          >
            <CartIcon name="shopping-cart" size={22} />
          </SelectionButton>
        </Header>

        <ProductSection>
          <View>
            <ProductText>Talharim com brócolis e bacon</ProductText>
            <ComplementText>500gr/100 cal</ComplementText>
          </View>
          <NavigationButton
            onPress={() => {
              navigate('ProductDetails', { sub_category: 5 });
            }}
          >
            <Icon name="chevron-right" size={22} color="#666" />
          </NavigationButton>
        </ProductSection>

        <SectionSeparator>
          <LineSeparator />
        </SectionSeparator>

        <ProductSection>
          <View>
            <ProductText>Talharim com brócolis e bacon</ProductText>
            <ComplementText>500gr/100 cal</ComplementText>
          </View>
          <NavigationButton
            onPress={() => {
              navigate('ProductDetails', { sub_category: 5 });
            }}
          >
            <Icon name="chevron-right" size={22} color="#666" />
          </NavigationButton>
        </ProductSection>

        <SectionSeparator>
          <LineSeparator />
        </SectionSeparator>

        <ProductSection>
          <View>
            <ProductText>Talharim com brócolis e bacon</ProductText>
            <ComplementText>500gr/100 cal</ComplementText>
          </View>
          <NavigationButton
            onPress={() => {
              navigate('ProductDetails', { sub_category: 5 });
            }}
          >
            <Icon name="chevron-right" size={22} color="#666" />
          </NavigationButton>
        </ProductSection>
        <SectionSeparator>
          <LineSeparator />
        </SectionSeparator>

        <ProductSection>
          <View>
            <ProductText>Talharim com brócolis e bacon</ProductText>
            <ComplementText>500gr/100 cal</ComplementText>
          </View>
          <NavigationButton
            onPress={() => {
              navigate('ProductDetails', { sub_category: 5 });
            }}
          >
            <Icon name="chevron-right" size={22} color="#666" />
          </NavigationButton>
        </ProductSection>

        <SectionSeparator>
          <LineSeparator />
        </SectionSeparator>

        <ProductSection>
          <View>
            <ProductText>Talharim com brócolis e bacon</ProductText>
            <ComplementText>500gr/100 cal</ComplementText>
          </View>
          <NavigationButton
            onPress={() => {
              navigate('ProductDetails', { sub_category: 5 });
            }}
          >
            <Icon name="chevron-right" size={22} color="#666" />
          </NavigationButton>
        </ProductSection>
        <SectionSeparator>
          <LineSeparator />
        </SectionSeparator>
      </View>
    </Container>
  );
};

export default Products;
