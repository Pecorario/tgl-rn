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
import { Registration } from '@screens/Registration';
import { ForgotPassword } from '@screens/ForgotPassword';

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
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#F7F7F7'
            },
            headerTintColor: '#707070',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            },
            headerTitleAlign: 'center'
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Authentication' }}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{ title: 'Registration' }}
          />
          <Stack.Screen
            name="Forgot Password"
            component={ForgotPassword}
            options={{ title: 'Reset password' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
