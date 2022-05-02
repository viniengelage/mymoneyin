import { Container, Number, Text } from './styles';

interface Props {
  number: number;
  text: string;
}

export default function Step({ number, text }: Props) {
  return (
    <Container>
      <Number>{number}º</Number>
      <Text>{text}</Text>
    </Container>
  );
}
