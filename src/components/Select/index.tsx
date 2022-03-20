import React from 'react';

import {
  Container,
  Thumbnail,
  ThumbnailText,
  InformationSection,
  CurrencyName,
  CurrencyValue,
  SelectIcon,
} from './styles';

export default function Select() {
  return (
    <Container>
      <Thumbnail>
        <ThumbnailText>R$</ThumbnailText>
      </Thumbnail>

      <InformationSection>
        <CurrencyName>Dólar</CurrencyName>
        <CurrencyValue>R$ 5,42</CurrencyValue>
      </InformationSection>

      <SelectIcon name="chevron-down-outline" />
    </Container>
  );
}
