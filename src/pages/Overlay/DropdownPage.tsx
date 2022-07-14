import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownTitle,
} from '../../components/Dropdown';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { LinkButton } from '../../components/LinkButton';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';

const exampleCode = `import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownTitle
} from '@atmoutsourcing/siakit';

<Dropdown>
  /* trigger here */

  <DropdownContent>
    <DropdownItem />
    <DropdownSeparator />
    <DropdownTitle />
  </DropdownContent>
</Dropdown>
`;

export function DropdownPage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Button</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center" flex>
            <Dropdown>
              <Button type="button" onClick={() => undefined}>
                Click to dropdown
              </Button>

              <DropdownContent>
                <DropdownItem onClick={() => undefined}>item 1</DropdownItem>

                <DropdownSeparator />
                <DropdownTitle>title</DropdownTitle>

                <DropdownItem onClick={() => undefined}>item 2</DropdownItem>
                <DropdownItem onClick={() => undefined}>item 3</DropdownItem>
              </DropdownContent>
            </Dropdown>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Dropdown</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode[]</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>side</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"top" | "right" | "bottom" | "left"`}</SimpleTableItem>
            <SimpleTableItem>bottom</SimpleTableItem>

            <SimpleTableItem>align</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"start" | "center" | "end"`}</SimpleTableItem>
            <SimpleTableItem>center</SimpleTableItem>
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">DropdownContent</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>ReactNode</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">DropdownItem</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem required>onClick</SimpleTableItem>
            <SimpleTableItem>FUNCTION</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>type</SimpleTableItem>
            <SimpleTableItem
              isEnum
            >{`"default" | "info" | "success" | "warning" | "danger"`}</SimpleTableItem>
            <SimpleTableItem>default</SimpleTableItem>

            <SimpleTableItem>icon</SimpleTableItem>
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
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">DropdownTitle</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">DropdownSeparator</Heading>

        <Flex>
          <Text>No props</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
