import React, { useState } from 'react';
import select from '../../assets/images/select';

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
  ThumbnailImage,
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
  color?: string;
}

interface ISelectProps {
  options: IOptionsProps[];
  description?: string;
  onChange?(_value: string): void;
}

export default function Select({
  options = [],
  description,
  onChange = () => ({}),
}: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState<IOptionsProps>({
    id: 'null',
    label: 'Escolha',
    thumbnail: select,
    value: 'null',
  });

  return (
    <>
      <Container onPress={() => setIsOpen(!isOpen)}>
        <ThumbnailImage source={{ uri: value.thumbnail }} />

        <InformationSection>
          <CurrencyName>{value.label}</CurrencyName>
          {description && <CurrencyValue>{description}</CurrencyValue>}
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
                    {/* <ModalOptionThumbnail
                        style={{ backgroundColor: option.color }}
                      > */}
                    <ThumbnailImage source={{ uri: option.thumbnail }} />
                    {/* </ModalOptionThumbnail> */}
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
