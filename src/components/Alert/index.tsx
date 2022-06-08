import { Info, CheckCircle, Warning, WarningOctagon } from 'phosphor-react';

import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Type, Container } from './styles';

type AlertProps = {
  type: Type;
  title: string;
  text?: string;
};

export function Alert({ type, title, text }: AlertProps): JSX.Element {
  return (
    <Container type={type}>
      {type === 'info' && <Info size={16} weight="fill" />}
      {type === 'success' && <CheckCircle size={16} weight="fill" />}
      {type === 'warning' && <Warning size={16} weight="fill" />}
      {type === 'danger' && <WarningOctagon size={16} weight="fill" />}

      <Flex direction="column">
        <Heading size="sm">{title}</Heading>

        {text && <Text size="sm">{text}</Text>}
      </Flex>
    </Container>
  );
}
