import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "styled-components";
import { Container, Title } from "./styles";

export function Home() {
  const { colors } = useTheme();

  return (
    <Container>
      <Title>
        My <Title style={{ color: colors.text }}>Money</Title> In
      </Title>
    </Container>
  );
}
