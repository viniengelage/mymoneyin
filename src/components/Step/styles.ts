import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  margin-top: ${RFValue(8)}px;
`;

export const Number = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;

export const Text = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.light};
  font-size: ${RFValue(16)}px;
  margin-left: ${RFValue(8)}px;
`;
