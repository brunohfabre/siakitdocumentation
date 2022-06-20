import { Badge } from '../../components/Badge';
import { Flex } from '../../components/Flex';
import { Grid } from '../../components/Grid';
import { Colors, colors } from '../../hooks/theme';

export function BadgePage(): JSX.Element {
  return (
    <Flex flex justify="center" align="center" gap={64} direction="column">
      <Grid columns={7} gap={8}>
        {Object.keys(colors).map((color) => (
          <Badge color={color as Colors}>badge</Badge>
        ))}
      </Grid>

      <Grid columns={7} gap={8}>
        {Object.keys(colors).map((color) => (
          <Badge color={color as Colors} icon="HiOutlinePlus">
            badge
          </Badge>
        ))}
      </Grid>
    </Flex>
  );
}
