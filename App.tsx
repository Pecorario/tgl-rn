import React from 'react';
import AppLoading from 'expo-app-loading';
import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import { Authentication } from '@navigation/Authentication';
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
      <Authentication />
    </ThemeProvider>
  );
}
