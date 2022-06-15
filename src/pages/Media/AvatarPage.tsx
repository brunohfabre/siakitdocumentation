import { Avatar } from '../../components/Avatar';
import { Flex } from '../../components/Flex';

export function AvatarPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center" gap={32}>
      <Flex gap>
        <Avatar src="https://github.com/brunohfabre.png" size="xs" badge />
        <Avatar src="https://github.com/brunohfabre.png" size="sm" badge />
        <Avatar src="https://github.com/brunohfabre.png" size="md" badge />
        <Avatar src="https://github.com/brunohfabre.png" size="lg" badge />
        <Avatar src="https://github.com/brunohfabre.png" size="xl" badge />
        <Avatar src="https://github.com/brunohfabre.png" size="2xl" badge />
      </Flex>

      <Flex gap>
        <Avatar size="xs" name="Bruno Fabre" />
        <Avatar size="sm" name="Bruno henrique de Fabre" />
        <Avatar size="md" name="Bruno Fabre" />
        <Avatar size="lg" name="Bruno Fabre" />
        <Avatar size="xl" name="Bruno Fabre" />
        <Avatar size="2xl" name="Bruno Fabre" badge />
      </Flex>
    </Flex>
  );
}
