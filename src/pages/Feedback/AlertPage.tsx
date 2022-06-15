import { Alert } from '../../components/Alert';
import { Flex } from '../../components/Flex';

export function AlertPage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center" gap={64}>
      <Flex direction="column" width={556} gap>
        <Alert type="info" title="Do not support blocking" />
        <Alert type="success" title="Do not support blocking" />
        <Alert type="warning" title="Do not support blocking" />
        <Alert type="danger" title="Do not support blocking" />
      </Flex>

      <Flex direction="column" width={556} gap>
        <Alert
          type="info"
          title="Do not support blocking"
          text="Source-level Privacy Controls do not support blocking to"
        />
        <Alert
          type="success"
          title="Do not support blocking"
          text="Source-level Privacy Controls do not support blocking to"
        />
        <Alert
          type="warning"
          title="Do not support blocking"
          text="Source-level Privacy Controls do not support blocking to"
        />
        <Alert
          type="danger"
          title="Do not support blocking"
          text="Source-level Privacy Controls do not support blocking to"
        />
      </Flex>
    </Flex>
  );
}
