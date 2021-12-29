import React from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import store from '@store/index';
import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Authentication } from '@navigation/Authentication';
import {
  useFonts,
  Roboto_400Regular_Italic,
  Roboto_700Bold_Italic,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#3CB371', backgroundColor: '#3CB371' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'white'
      }}
      text2Style={{
        color: 'white'
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#E74C3C', backgroundColor: '#E74C3C' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'white'
      }}
      text2Style={{
        color: 'white'
      }}
    />
  ),
  warn: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#FFD700', backgroundColor: '#FFD700' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'white'
      }}
      text2Style={{
        color: 'white'
      }}
    />
  )
};

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Authentication />
      </ThemeProvider>
      <Toast config={toastConfig} />
    </Provider>
  );
}
