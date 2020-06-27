import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Porch from '../../modules/main/pages/Porch';
import SignUp from '../../modules/auth/pages/SignUp';
import SignIn from '../../modules/auth/pages/SignIn';

import Location from '../../modules/order/pages/Location';
import DateTime from '../../modules/order/pages/DateTime';
import Menu from '../../modules/order/pages/Menu';
import Products from '../../modules/order/pages/Products';
import ProductDetails from '../../modules/order/pages/ProductDetails';
import Order from '../../modules/order/pages/Order';
import Cart from '../../modules/order/pages/Cart';
import Main from '../../modules/main/pages/Main';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="Porch" component={Porch} />
    <Auth.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: 'SignIn' }}
    />
    <Auth.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: 'Cadastrar' }}
    />

    <Auth.Screen name="Main" component={Main} />
    <Auth.Screen
      name="Order"
      component={Order}
      options={{ title: 'Order auth' }}
    />
    <Auth.Screen
      name="Menu"
      component={Menu}
      options={{ title: 'Menu auth' }}
    />

    <Auth.Screen
      name="OrderDetail"
      component={Menu}
      options={{ title: 'Order Detail auth' }}
    />

    <Auth.Screen name="Location" component={Location} />
    <Auth.Screen name="DateTime" component={DateTime} />
    <Auth.Screen name="Products" component={Products} />
    <Auth.Screen name="ProductDetails" component={ProductDetails} />
    <Auth.Screen name="Cart" component={Cart} />
  </Auth.Navigator>
);

export default AuthRoutes;
