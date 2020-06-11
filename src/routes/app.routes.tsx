import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import MainMenu from '../pages/MainMenu';
import Menu from '../pages/Menu';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="MainMenu" component={MainMenu} />
    <App.Screen name="Menu" component={Menu} />
    <App.Screen name="Products" component={Products} />
    <App.Screen name="ProductDetails" component={ProductDetails} />
  </App.Navigator>
);

export default AppRoutes;
