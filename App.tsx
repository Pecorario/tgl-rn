import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '@screens/Login';
import { ThemeProvider } from 'styled-components';
import theme from '@global/styles/theme';
import AppLoading from 'expo-app-loading';

const Stack = createNativeStackNavigator();

import {
  useFonts,
  Roboto_400Regular_Italic,
  Roboto_700Bold_Italic,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular_Italic,
    Roboto_700Bold_Italic,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
