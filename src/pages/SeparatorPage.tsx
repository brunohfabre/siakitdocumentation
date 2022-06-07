import { Flex } from '../components/Flex';
import { Separator } from '../components/Separator';

export function SeparatorPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center" gap={64}>
      <Flex width={440} align="center">
        <Separator />
      </Flex>

      <Flex height={440} align="center">
        <Separator direction="vertical" />
      </Flex>
    </Flex>
  );
}
