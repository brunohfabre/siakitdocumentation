import { Flex } from '../components/Flex';
import { Heading } from '../components/Heading';

export function HeadingPage(): JSX.Element {
  return (
    <Flex justifyContent="center" alignItems="center" gap>
      <Heading size="5xl">5xl Heading</Heading>
      <Heading size="4xl">4xl Heading</Heading>
      <Heading size="3xl">3xl Heading</Heading>
      <Heading size="2xl">2xl Heading</Heading>
      <Heading size="xl">xl Heading</Heading>
      <Heading size="lg">lg Heading</Heading>
      <Heading size="md">md Heading</Heading>
      <Heading size="sm">sm Heading</Heading>
      <Heading size="xs">xs Heading</Heading>
    </Flex>
  );
}
