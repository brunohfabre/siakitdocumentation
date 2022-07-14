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
import { Timeline, TimelineItem } from '../../components/Timeline';

const exampleCode = `import { Timeline, TimelineItem } from '@siakit';

<Timeline>
  <TimelineItem />
</Timeline>`;

export function TimelinePage(): JSX.Element {
  return (
    <Flex flex direction="column" align="center" overflow>
      <Flex width={768} padding={32} direction="column" gap>
        <Heading size="xl">Timeline</Heading>
        <Card>
          <Flex padding={32} justify="center" align="center" flex>
            <Timeline>
              <TimelineItem name="name">
                <Flex padding>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nisi sapiente nesciunt harum, totam quo odit
                  exercitationem cupiditate perspiciatis eligendi sint
                  consequuntur velit aliquam vel molestiae.
                </Flex>
              </TimelineItem>
              <TimelineItem name="name">
                <Flex padding>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam nisi sapiente nesciunt harum, totam quo odit
                  exercitationem cupiditate perspiciatis eligendi sint
                  consequuntur velit aliquam vel molestiae.
                </Flex>
              </TimelineItem>
            </Timeline>
          </Flex>
        </Card>

        <Spacer height />
        <Heading>Anatomy</Heading>
        <CodeHighlight>{exampleCode}</CodeHighlight>

        <Spacer height />
        <Heading>API reference</Heading>
        <Heading size="md">Timeline</Heading>

        <SimpleTable>
          <SimpleTableHeader>
            <SimpleTableItem isHeader>Prop</SimpleTableItem>
            <SimpleTableItem isHeader>Type</SimpleTableItem>
            <SimpleTableItem isHeader>Default</SimpleTableItem>
          </SimpleTableHeader>

          <SimpleTableBody>
            <SimpleTableItem required>children</SimpleTableItem>
            <SimpleTableItem>TimelineItem</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>

        <Spacer height />
        <Heading size="md">TimelineItem</Heading>

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

            <SimpleTableItem required>name</SimpleTableItem>
            <SimpleTableItem>string</SimpleTableItem>
            <SimpleTableItem />
          </SimpleTableBody>
        </SimpleTable>
      </Flex>
    </Flex>
  );
}
