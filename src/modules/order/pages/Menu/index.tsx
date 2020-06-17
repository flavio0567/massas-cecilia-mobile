import React from 'react';

import { View, StatusBar, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import bannerImg from '../../../assets/caneloni.png';
import productIMG from '../../../assets/nhoque.png';

import {
  Container,
  BannerView,
  BannerText,
  BannerImage,
  SectionSeparator,
  LineSeparator,
  ProductSection,
  ProductText,
  NavigationButton,
  Header,
  SelectionButton,
  ChevronIcon,
  ProductImg,
  StartusBarText,
  CartIcon,
} from './styles';

const Menu: React.FC = ({ navigation, route }: any) => {
  const { navigate } = navigation;

  console.log(route.params.product_family);

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
          {/* <StartusBarText>Menu</StartusBarText> */}
          <SelectionButton
            onPress={() => navigate('OrderDetails', { caller: 'Menu' })}
          >
            <CartIcon name="shopping-cart" size={22} />
          </SelectionButton>
        </Header>
      </View>
      <BannerView>
        <BannerImage source={bannerImg} />
        <BannerText>Massas</BannerText>
      </BannerView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <ProductSection>
          <ProductImg source={productIMG} />
          <ProductText>Nhoque</ProductText>
          <NavigationButton
            onPress={() => {
              navigate('Products', { sub_category: 8 });
            }}
          >
            <Icon name="chevron-right" size={22} color="#666" />
          </NavigationButton>
        </ProductSection>

        <SectionSeparator>
          <LineSeparator />
        </SectionSeparator>

        <ProductSection>
          <ProductImg source={productIMG} />
          <ProductText>Talharim</ProductText>
          <NavigationButton
            onPress={() => {
              navigate('Products', { sub_category: 12 });
            }}
          >
            <Icon name="chevron-right" size={22} color="#666" />
          </NavigationButton>
        </ProductSection>

        <SectionSeparator>
          <LineSeparator />
        </SectionSeparator>

        <ProductSection>
          <ProductImg source={productIMG} />
          <ProductText>Capelete</ProductText>
          <NavigationButton
            onPress={() => {
              navigate('Products', { sub_category: 5 });
            }}
          >
            <Icon name="chevron-right" size={22} color="#666" />
          </NavigationButton>
        </ProductSection>

        <SectionSeparator>
          <LineSeparator />
        </SectionSeparator>

        <ProductSection>
          <ProductImg source={productIMG} />
          <ProductText>Caneloni</ProductText>
          <NavigationButton
            onPress={() => {
              navigate('Products', { sub_category: 3 });
            }}
          >
            <Icon name="chevron-right" size={22} color="#666" />
          </NavigationButton>
        </ProductSection>
      </ScrollView>
    </Container>
  );
};
export default Menu;
