import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInputProps,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Container, InputComponent, Icon, Main } from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  onChangeText?(value: string): void;
  onBlur?(): void;
  onFocus?(): void;
}

export default function Input({
  placeholder,
  icon,
  onChangeText = () => ({}),
  onFocus = () => ({}),
  onBlur = () => ({}),
  ...rest
}: Props) {
  const { colors } = useTheme();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Main onPress={Keyboard.dismiss}>
      <Container>
        <Icon name={icon} isFocused={isFocused} />
        <InputComponent
          placeholder={placeholder}
          placeholderTextColor={isFocused ? colors.text : colors.inputColorBlur}
          onFocus={() => {
            setIsFocused(true);
            onFocus();
          }}
          onBlur={() => {
            setIsFocused(false);
            onBlur();
          }}
          onChangeText={onChangeText}
          {...rest}
        />
      </Container>
    </Main>
  );
}
