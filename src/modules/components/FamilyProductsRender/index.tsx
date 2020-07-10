import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import { View } from 'react-native';
import massasImg from '../../assets/nhoque.png';
import {
  Container,
  NavigationButton,
  ProductImg,
  Item,
  FamilyProductText,
} from './styles';

interface Product {
  id: string;
  name: string;
  sales_price: number;
  product_family: number;
  sub_category: number;
}

type Products = Product[];

const FamilyProductRender: React.FC<any> = ({ data }) => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <ProductImg width={42} source={massasImg} />
      <View>
        <FamilyProductText>{data.name}</FamilyProductText>
      </View>
      <Item>
        <NavigationButton
          onPress={() => {
            navigate('Products', {
              product_family: data.product_family,
              category: data.category,
            });
          }}
        />
      </Item>
    </Container>
  );
};
export default FamilyProductRender;
