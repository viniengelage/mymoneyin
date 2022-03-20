import { Ionicons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

import styled, { css } from 'styled-components/native';

interface Props {
  isFocused?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 60px;

  background: ${props => props.theme.colors.inputBlackground};
  border-radius: 3px;
  margin-top: 16px;
  padding: 0 16px;
`;

export const InputComponent = styled.TextInput`
  flex: 1;

  font-size: ${RFValue(16)}px;
  font-family: ${props => props.theme.fonts.light};
  color: ${props => props.theme.colors.text};
`;

export const Icon = styled(Ionicons)<Props>`
  color: ${props => props.theme.colors.inputColorBlur};
  font-size: ${RFValue(24)}px;
  margin-right: 16px;

  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.colors.text};
    `}
`;
