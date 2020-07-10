import React, { useCallback } from 'react';
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

const ProductRender: React.FC = ({ data }: any) => {
  const { navigate } = useNavigation();

  const navigateToProducts = useCallback(
    (product_family: number, category: number) => {
      navigate('Products', { product_family, category });
    },
    [navigate],
  );

  return (
    <Container>
      <SectionSeparator>
        <ProductImg source={productIMG} />
        <View>
          <ProductText>{data.name}</ProductText>
        </View>

        <NavigationButton
          onPress={() => {
            navigateToProducts(data.product_family, data.category);
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
