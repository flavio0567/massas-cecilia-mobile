import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Porch from '../pages/Porch';
import Order from '../pages/Order';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      // headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <App.Screen name="Porch" component={Porch} />
    <App.Screen name="Order" component={Order} />
  </App.Navigator>
);

export default AppRoutes;
