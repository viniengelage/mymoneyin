import styled from 'styled-components/native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import Animated from 'react-native-reanimated';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  background: ${props => props.theme.colors.background};
  position: relative;
  align-items: center;
`;

export const Header = styled.View`
  background: ${props => props.theme.colors.darkBackground};
  width: 100%;
  z-index: 999;
  padding-top: ${RFValue(48)}px;
  padding-bottom: ${RFValue(8)}px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  flex: 1;
  margin-top: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
  font-size: ${RFPercentage(4.5)}px;
  text-align: center;
`;

export const AnimatedTitle = Animated.createAnimatedComponent(Title);

export const ConvertContainer = styled.View`
  width: 100%;
`;

export const AnimatedContent =
  Animated.createAnimatedComponent(ConvertContainer);

export const Subtitle = styled.Text`
  font-family: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.text};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
  text-align: center;

  margin-top: ${RFValue(12)}px;
`;

export const ConvertValueTitle = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.fonts.medium};
`;

export const ConvertedValueContainer = styled.View`
  background: ${props => props.theme.colors.darkBackground};
  width: 100%;
  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const ConvertedValue = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.regular};
  font-size: ${RFValue(24)}px;
`;

export const Author = styled.Text`
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.fonts.light};
  font-size: ${RFValue(12)}px;
  margin-bottom: ${RFValue(12)}px;
`;
