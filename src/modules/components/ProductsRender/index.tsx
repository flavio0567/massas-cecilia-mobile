import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
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

const ProductRender: React.FC = ({ data }: any) => {
  const { navigate } = useNavigation();
  return (
    <Container>
      <ProductImg source={productIMG} />
      <ProductText>{data.name}</ProductText>
      <ProductText>{data.sales_price}</ProductText>
      <NavigationButton
        onPress={() => {
          navigate('Products', { sub_category: 8 });
        }}
      >
        <Icon name="chevron-right" size={22} color="#666" />
      </NavigationButton>

      <SectionSeparator>
        <LineSeparator />
      </SectionSeparator>
    </Container>
  );
};
export default ProductRender;
