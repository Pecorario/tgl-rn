import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, ForgotPassword, Registration } from '@screens/index';
import { Logged } from '@navigation/Logged';

const Stack = createNativeStackNavigator();

export function Authentication() {
  return (
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
        <Stack.Screen
          name="Logged"
          component={Logged}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
