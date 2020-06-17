import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Location from '../../modules/order/pages/Location';
import DateTime from '../../modules/order/pages/DateTime';
import Menu from '../../modules/order/pages/Menu';
import Products from '../../modules/order/pages/Products';
import ProductDetails from '../../modules/order/pages/ProductDetails';
import Order from '../../modules/order/pages/Order';
import Main from '../../modules/main/pages/Main';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      // initialRoute: statusBarHidden: true,
      headerShown: false,
      cardStyle: { backgroundColor: '#232129' },
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen
      name="Order"
      component={Order}
      options={{ title: 'Order app' }}
    />
    <App.Screen name="Menu" component={Menu} options={{ title: 'Menu app' }} />

    <App.Screen name="Location" component={Location} />
    <App.Screen name="DateTime" component={DateTime} />
    <App.Screen name="Products" component={Products} />
    <App.Screen name="ProductDetails" component={ProductDetails} />
  </App.Navigator>
);

export default AppRoutes;
