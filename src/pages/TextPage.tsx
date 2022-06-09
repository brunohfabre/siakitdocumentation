import { Flex } from '../components/Flex';
import { Text } from '../components/Text';

export function TextPage(): JSX.Element {
  return (
    <Flex justify="center" align="center" gap>
      <Text size="6xl">6xl Text</Text>
      <Text size="5xl">5xl Text</Text>
      <Text size="4xl">4xl Text</Text>
      <Text size="3xl">3xl Text</Text>
      <Text size="2xl">2xl Text</Text>
      <Text size="xl">xl Text</Text>
      <Text size="lg">lg Text</Text>
      <Text size="md">md Text</Text>
      <Text size="sm">sm Text</Text>
      <Text size="xs">xs Text</Text>
    </Flex>
  );
}
