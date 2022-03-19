import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "expo-status-bar";

import theme from "./src/global/styles/theme";

import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
