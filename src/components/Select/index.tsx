import React, { useState } from 'react';
import { View } from 'react-native';

import {
  Container,
  Thumbnail,
  ThumbnailText,
  InformationSection,
  CurrencyName,
  CurrencyValue,
  Icon,
  ModalContainer,
  Modal,
  ModalContent,
  ModalTitleContainer,
  ModalTitle,
  ModalOptionButton,
  ModalOptionThumbnail,
  ModalOptionThumbnailText,
  ModalOptionText,
} from './styles';

export default function Select() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Container onPress={() => setIsOpen(!isOpen)}>
        <Thumbnail>
          <ThumbnailText>R$</ThumbnailText>
        </Thumbnail>

        <InformationSection>
          <CurrencyName>Dólar</CurrencyName>
          <CurrencyValue>R$ 5,42</CurrencyValue>
        </InformationSection>

        <Icon name="chevron-down-outline" />
      </Container>
      <Modal
        visible={isOpen}
        // animationType="slide"
        transparent
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <ModalContainer>
          <ModalContent>
            <ModalTitleContainer>
              <ModalTitle>Escolher moeda</ModalTitle>
              <Icon name="close-outline" onPress={() => setIsOpen(false)} />
            </ModalTitleContainer>

            <ModalOptionButton>
              <ModalOptionThumbnail>
                <ModalOptionThumbnailText>R$</ModalOptionThumbnailText>
              </ModalOptionThumbnail>
              <ModalOptionText>Dólar</ModalOptionText>
            </ModalOptionButton>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
}
