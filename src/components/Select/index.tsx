import React, { useState } from 'react';

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
  ScrollView,
  ScrollContainer,
} from './styles';

export interface IOptionsProps {
  id: string;
  label: string;
  value: string;
  thumbnail: string;
  desciption?: string;
}

interface ISelectProps {
  options: IOptionsProps[];
  onChange?(_value: string): void;
}

export default function Select({
  options = [],
  onChange = () => ({}),
}: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState<IOptionsProps>({
    id: 'null',
    label: 'Escolha',
    thumbnail: '?',
    value: 'null',
  });

  return (
    <>
      <Container onPress={() => setIsOpen(!isOpen)}>
        <Thumbnail>
          <ThumbnailText>{value.thumbnail}</ThumbnailText>
        </Thumbnail>

        <InformationSection>
          <CurrencyName>{value.label}</CurrencyName>
          {value.desciption && (
            <CurrencyValue>{value.desciption}</CurrencyValue>
          )}
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

            <ScrollView>
              <ScrollContainer>
                {options.map(option => (
                  <ModalOptionButton
                    key={option.id}
                    onPress={() => {
                      setValue(option);
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                  >
                    <ModalOptionThumbnail>
                      <ModalOptionThumbnailText>
                        {option.thumbnail}
                      </ModalOptionThumbnailText>
                    </ModalOptionThumbnail>
                    <ModalOptionText>{option.label}</ModalOptionText>
                  </ModalOptionButton>
                ))}
              </ScrollContainer>
            </ScrollView>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
}
