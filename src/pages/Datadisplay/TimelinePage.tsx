import { Flex } from '../../components/Flex';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { TimelineItem, Timeline } from '../../components/Timeline';

export function TimelinePage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Flex width={640}>
        <Timeline>
          <TimelineItem name="Bruno Fabre">
            <Flex direction="column" padding gap={8}>
              <Heading size="md">Item 1</Heading>

              <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                accusantium ratione exercitationem porro aliquid, magnam sequi.
                Consequatur nesciunt voluptatum neque ea recusandae impedit
                adipisci, accusamus porro, dicta minus eius suscipit.
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem name="Vinicius Henrique">
            <Flex direction="column" padding gap={8}>
              <Heading size="md">Item 2</Heading>

              <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                accusantium ratione exercitationem porro aliquid, magnam sequi.
                Consequatur nesciunt voluptatum neque ea recusandae impedit
                adipisci, accusamus porro, dicta minus eius suscipit.
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem name="Joubert Vasconcelos">
            <Flex direction="column" padding gap={8}>
              <Heading size="md">Item 3</Heading>

              <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                accusantium ratione exercitationem porro aliquid, magnam sequi.
                Consequatur nesciunt voluptatum neque ea recusandae impedit
                adipisci, accusamus porro, dicta minus eius suscipit.
              </Text>
            </Flex>
          </TimelineItem>
        </Timeline>
      </Flex>
    </Flex>
  );
}
