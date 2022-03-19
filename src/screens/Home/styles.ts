import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
// import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  background: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.primary};
  font-size: ${RFValue(36)}px;

  margin-top: ${RFPercentage(10)}px;
`;
