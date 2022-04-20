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
  color: ${props => props.theme.colors.text};
  font-size: ${RFPercentage(4.5)}px;
  /* font-size: ${RFValue(36)}px; */
  /* line-height: ${RFValue(42)}px; */

  margin-top: ${RFPercentage(6)}px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  text-align: center;

  /* margin-top: ${RFValue(8)}px; */
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

export const StepContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const StepNumber = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(24)}px;
`;
export const StepText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.light};
  font-size: ${RFValue(16)}px;
  margin-left: ${RFValue(8)}px;
  width: 100%;
`;
