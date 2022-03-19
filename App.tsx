/* eslint-disable camelcase */
import React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";

import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
