import { Flex } from '../components/Flex';
import { Rectangle, Ellipse } from '../components/Shimmer';

export function ShimmerPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Flex width={464} height={200} gap={64}>
        <Rectangle />
        <Ellipse />
      </Flex>
    </Flex>
  );
}
