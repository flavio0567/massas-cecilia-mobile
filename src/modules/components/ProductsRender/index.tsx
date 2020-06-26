import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import productIMG from '../../assets/nhoque.png';
import {
  Container,
  SectionSeparator,
  LineSeparator,
  ProductText,
  NavigationButton,
  ProductImg,
} from './styles';

interface Product {
  id: string;
  name: string;
  sales_price: number;
  product_family: number;
  sub_category: number;
}

type Products = Product[];

const ProductRender: React.FC<any> = ({ data }) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <SectionSeparator>
        <ProductImg source={productIMG} />
        <View>
          <ProductText>{data.name}</ProductText>
        </View>

        <NavigationButton
          onPress={() => {
            navigate('Products', {
              product_family: data.product_family,
              category: data.category,
            });
          }}
        >
          <Icon name="chevron-right" size={22} color="#666" />
        </NavigationButton>
      </SectionSeparator>
      <LineSeparator />
    </Container>
  );
};
export default ProductRender;
