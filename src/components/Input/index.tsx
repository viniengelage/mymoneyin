import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import { Container, InputComponent, Icon } from './styles';

interface Props {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
}

export default function Input({ placeholder, icon }: Props) {
  const { colors } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Icon name={icon} isFocused={isFocused} />
      <InputComponent
        placeholder={placeholder}
        placeholderTextColor={isFocused ? colors.text : colors.inputColorBlur}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
}
