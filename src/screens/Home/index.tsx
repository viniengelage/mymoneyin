import React from 'react';

import { useTheme } from 'styled-components';

import {
  Container,
  Title,
  ConvertedValueContainer,
  ConvertedValue,
  ConvertedTextContainer,
  ConvertedTextLine,
  ConvertedText,
} from './styles';

import Select from '../../components/Select';
import Input from '../../components/Input';

export function Home() {
  const { colors } = useTheme();

  return (
    <Container>
      <Title>
        My <Title style={{ color: colors.text }}>Money</Title> In
      </Title>

      <Select />

      <ConvertedTextContainer>
        <ConvertedTextLine />
        <ConvertedText>Converter para</ConvertedText>
        <ConvertedTextLine />
      </ConvertedTextContainer>

      <Select />

      <ConvertedTextContainer>
        <ConvertedTextLine />
        <ConvertedText>Valor convertido</ConvertedText>
        <ConvertedTextLine />
      </ConvertedTextContainer>

      <ConvertedValueContainer>
        <ConvertedValue>R$ 124.657,42</ConvertedValue>
      </ConvertedValueContainer>

      <Input icon="pricetag-outline" placeholder="Quantidade" />
    </Container>
  );
}
