import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

import Location from '../../modules/order/pages/Location';
import LocationDetails from '../../modules/order/pages/LocationDetails';
import DateTimeDelivery from '../../modules/order/pages/DateTimeDelivery';
import Menu from '../../modules/order/pages/Menu';
import Order from '../../modules/order/pages/Order';
import Main from '../../modules/main/pages/Main';
import Products from '../../modules/order/pages/Products';
import ProductDetails from '../../modules/order/pages/ProductDetails';
import Cart from '../../modules/order/pages/Cart';

const App = createStackNavigator();

const Tab = createBottomTabNavigator();

const AppRoutes: React.FC = () => {
  const MainStackScreen = useCallback(() => {
    return (
      <App.Navigator>
        <App.Screen
          name="Order"
          component={Order}
          options={{
            headerShown: false,
          }}
        />
        <App.Screen
          name="Menu"
          component={Menu}
          options={{
            headerShown: false,
          }}
        />
        <App.Screen
          name="Products"
          component={Products}
          options={{
            headerShown: false,
          }}
        />
        <App.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />
      </App.Navigator>
    );
  }, []);

  const DeliveryStackScreen = useCallback(() => {
    return (
      <App.Navigator>
        <App.Screen
          name="Main"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <App.Screen
          name="Location"
          component={Location}
          options={{
            headerShown: false,
          }}
        />
        <App.Screen
          name="LocationDetails"
          component={LocationDetails}
          options={{
            headerShown: false,
          }}
        />
        <App.Screen
          name="DateTimeDelivery"
          component={DateTimeDelivery}
          options={{
            headerShown: false,
          }}
        />
      </App.Navigator>
    );
  }, []);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ff9000',
        inactiveTintColor: '#fcd0ba',
        style: {
          backgroundColor: '#fff5e6',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="DeliveryStack"
        component={DeliveryStackScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={22} style={{ padding: 8 }} />
          ),
          tabBarVisible: false,
        }}
      />
      <Tab.Screen
        name="MainStack"
        component={MainStackScreen}
        options={{
          tabBarLabel: 'Cardápio',
          tabBarIcon: ({ color }) => (
            <Icon
              name="book-open"
              color={color}
              size={22}
              style={{ padding: 8 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Pedido',
          tabBarIcon: ({ color }) => (
            <Icon
              name="shopping-cart"
              color={color}
              size={22}
              style={{ padding: 8 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppRoutes;
