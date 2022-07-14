import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { Icon } from '../../components/Icon';
import { LinkButton } from '../../components/LinkButton';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';

const exampleCode = `import { Icon } from '@atmoutsourcing/siakit';

<Icon />`;

export function IconPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Icon</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center" gap flex>
            <Icon name="HiOutlinePlus" />
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Icon</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem>name</SimpleTableItem>
            <SimpleTableItem isEnum>
              <LinkButton
                onClick={() =>
                  window.open('https://react-icons.github.io/react-icons/')
                }
              >
                react-icons docs
              </LinkButton>
            </SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>size</SimpleTableItem>
            <SimpleTableItem>string | number</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
