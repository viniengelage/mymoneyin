import styled from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  background: ${props => props.theme.colors.secundary};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 70px;
  border-radius: 3px;

  padding: 0 16px;
  margin-top: 16px;
`;

export const Thumbnail = styled.View`
  align-items: center;
  justify-content: center;

  width: ${RFValue(38)}px;
  height: ${RFValue(38)}px;
  background: ${props => props.theme.colors.primary};
  border-radius: ${RFValue(19)}px;
`;

export const ThumbnailText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.light};
  font-size: ${RFValue(12)}px;
`;

export const InformationSection = styled.View`
  flex: 1;
  margin-left: ${RFValue(8)}px;
  justify-content: center;
`;

export const CurrencyName = styled.Text`
  font-family: ${props => props.theme.fonts.semiBold};
  color: ${props => props.theme.colors.text};
  line-height: ${RFValue(16)}px;
  font-size: ${RFValue(14)}px;
`;

export const CurrencyValue = styled.Text`
  font-family: ${props => props.theme.fonts.light};
  color: ${props => props.theme.colors.text};
  line-height: ${RFValue(14)}px;
  font-size: ${RFValue(12)}px;
`;

export const Icon = styled(Ionicons)`
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(24)}px;
`;

export const Modal = styled.Modal`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: red;
`;

export const ModalContainer = styled.View`
  flex: 1;
  width: 100%;

  align-items: center;
  justify-content: center;

  align-self: center;

  background: ${props => props.theme.colors.opacityBackground};
  border-radius: 3px;
`;

export const ModalContent = styled.View`
  width: 80%;
  height: ${RFPercentage(60)}px;

  background: ${props => props.theme.colors.secundary};
  border-radius: 12px;
  align-items: center;
`;

export const ModalTitleContainer = styled.View`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  height: ${RFValue(50)}px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 16px;
  justify-content: space-between;
`;

export const ModalTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${props => props.theme.fonts.semiBold};
  color: ${props => props.theme.colors.text};
`;

export const ModalOptionButton = styled.TouchableOpacity`
  width: 90%;
  height: ${RFValue(40)}px;
  border-radius: 3px;
  margin-top: 8px;

  flex-direction: row;
  align-items: center;
  padding: 0 16px;

  background: ${props => props.theme.colors.background};
`;

export const ModalOptionThumbnail = styled.View`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: ${RFValue(12)}px;

  align-items: center;
  justify-content: center;

  background: ${props => props.theme.colors.primary};
`;
export const ModalOptionThumbnailText = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.light};
`;
export const ModalOptionText = styled.Text`
  margin-left: 8px;

  font-size: ${RFValue(12)}px;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.semiBold};
`;
