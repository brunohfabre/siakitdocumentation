import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { CodeHighlight } from '../../components/CodeHighlight';
import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import {
  SimpleTable,
  SimpleTableHeader,
  SimpleTableItem,
} from '../../components/SimpleTable';
import { SimpleTableBody } from '../../components/SimpleTable/SimpleTableBody';
import { Spacer } from '../../components/Spacer';
import { useLoading } from '../../hooks/loading';

const exampleCode = `import { useLoading } from '@atmoutsourcing/siakit/hooks';

useLoading(true);
clearLoading(true);`;

export function LoadingHookPage(): JSX.Element {
  const { setLoading } = useLoading();

  function handleLoading(): void {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Loading Hook</Heading>
        <Card>
          <Flex height={192} padding justify="center" align="center" flex>
            <Button type="button" onClick={handleLoading}>
              Show loading
            </Button>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Loading Hook</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Func</SimpleTableItem>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem>setLoading</SimpleTableItem>
            <SimpleTableItem>boolean</SimpleTableItem>
            <SimpleTableItem />

            <SimpleTableItem>clearLoading</SimpleTableItem>
            <SimpleTableItem />
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
