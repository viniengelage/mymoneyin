import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Container, InputComponent, Icon } from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  onChangeText?(value: string): void;
}

export default function Input({
  placeholder,
  icon,
  onChangeText = () => ({}),
  ...rest
}: Props) {
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
        onChangeText={onChangeText}
        {...rest}
      />
    </Container>
  );
}
