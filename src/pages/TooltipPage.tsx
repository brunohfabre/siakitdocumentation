import { Flex } from '../components/Flex';
import { Tooltip } from '../components/Tooltip';

export function TooltipPage(): JSX.Element {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Tooltip content="Tooltip content">
        <button type="button">hover to tootip</button>
      </Tooltip>
    </Flex>
  );
}
