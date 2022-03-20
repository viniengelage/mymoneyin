import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 40px;

  background: ${props => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.primary};
  font-size: ${RFValue(36)}px;

  margin-top: ${RFPercentage(10)}px;
`;

export const ConvertedTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 16px;
`;
export const ConvertedText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.medium};
  font-size: ${RFValue(12)}px;
`;
export const ConvertedTextLine = styled.View`
  width: ${RFValue(60)}px;
  height: 1px;
  background: ${props => props.theme.colors.text};
  margin: 0 8px;
`;

export const ConvertedValueContainer = styled.View`
  min-width: 90%;
  max-width: 100%;
  height: ${RFValue(50)}px;
  margin-top: 16px;

  align-items: center;
  justify-content: center;

  border-radius: 6px;
  border-color: ${props => props.theme.colors.inputBlackground};
  border-width: 2px;
  padding: 0 16px;
`;

export const ConvertedValue = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${RFValue(24)}px;
`;
