/* eslint-disable camelcase */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

import { Home } from './src/screens/Home';
import { ExchangesProvider } from './src/hooks/exchange';
import SplashScreen from './src/components/Splash';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />
        <SplashScreen />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <ExchangesProvider>
        <Home />
        <StatusBar style="light" />
      </ExchangesProvider>
    </ThemeProvider>
  );
}
