import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import './config/ReactotronConfig.js';

import store from './store';
import Routes from './shared/routes';
import AppProvider from './shared/hooks';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="##ff9000" />
      <AppProvider>
        <View style={{ flex: 1, backgroundColor: '##ff9000' }}>
          <Routes />
        </View>
      </AppProvider>
    </NavigationContainer>
  </Provider>
);

export default App;
