import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackNavigator } from './src/routes/StackNavigator';
import { Provider } from 'react-redux';
import { store } from './src/modules/root/context/store';

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
