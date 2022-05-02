import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, Logo } from './styles';

export default function SplashScreen() {
  const { colors } = useTheme();

  return (
    <Container>
      <Logo source={require('../../assets/images/logo/logo.png')} />

      <ActivityIndicator size="large" color={colors.primary} />
    </Container>
  );
}
