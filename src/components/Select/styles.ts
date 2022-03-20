import styled from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
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

export const SelectIcon = styled(Ionicons)`
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(24)}px;
`;
