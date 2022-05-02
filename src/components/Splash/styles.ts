import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
`;

export const Logo = styled.Image`
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
  font-size: ${RFPercentage(4.5)}px;
  text-align: center;
`;
