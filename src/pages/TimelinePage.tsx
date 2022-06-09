import { Flex } from '../components/Flex';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TimelineItem } from '../components/Timeline';
import { Timeline } from '../components/Timeline/styles';

export function TimelinePage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center">
      <Flex width={640}>
        <Timeline>
          <TimelineItem name="bruno fabre">
            <Flex direction="column" padding gap={8}>
              <Heading size="md">title</Heading>

              <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                accusantium ratione exercitationem porro aliquid, magnam sequi.
                Consequatur nesciunt voluptatum neque ea recusandae impedit
                adipisci, accusamus porro, dicta minus eius suscipit.
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem name="bruno fabre">
            <Flex direction="column" padding gap={8}>
              <Heading size="md">title</Heading>

              <Text size="sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                accusantium ratione exercitationem porro aliquid, magnam sequi.
                Consequatur nesciunt voluptatum neque ea recusandae impedit
                adipisci, accusamus porro, dicta minus eius suscipit.
              </Text>
            </Flex>
          </TimelineItem>
          <TimelineItem name="bruno fabre">
            <Flex direction="column" padding gap={8}>
              <Heading size="md">title</Heading>

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
