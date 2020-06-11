import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Porch from '../pages/Porch';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Auth.Screen name="Porch" component={Porch} />
    <Auth.Screen name="Login" component={SignIn} options={{ title: 'Login' }} />
    <Auth.Screen
      name="Cadastrar"
      component={SignUp}
      options={{ title: 'Cadastrar' }}
    />
  </Auth.Navigator>
);

export default AuthRoutes;
