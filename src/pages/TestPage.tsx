import { Flex } from '../components/Flex';
import { Editor } from '../components/Form/Editor';

export function TestPage(): JSX.Element {
  return (
    <Flex overflow>
      <Editor />
    </Flex>
  );
}
