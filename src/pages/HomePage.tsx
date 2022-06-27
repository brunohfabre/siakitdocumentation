import React from 'react';

import styled from 'styled-components';

import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Grid } from '../components/Grid';
import { Spacer } from '../components/Spacer';
import { Text } from '../components/Text';
import { colors, Colors, useTheme } from '../hooks/theme';

const Box = styled.div<{ colorScheme: Colors }>`
  width: 128px;
  height: 64px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors[props.colorScheme][9]};
`;

export function HomePage(): JSX.Element {
  const { toggleTheme, colorScheme, changeColorScheme } = useTheme();

  return (
    <Flex flex justify="center" align="center" direction="column" gap>
      <Text size="lg">Appearence</Text>

      <Box colorScheme={colorScheme} />

      <Spacer height />

      <Text size="lg">Theme</Text>

      <Flex gap>
        <Button type="button" onClick={() => toggleTheme('light')}>
          switch to light
        </Button>

        <Button type="button" onClick={() => toggleTheme('dark')}>
          switch to dark
        </Button>
      </Flex>

      <Spacer height />

      <Text size="lg">Accent color</Text>
      <Grid columns={7} gap={8}>
        {Object.keys(colors).map((color) => (
          <Button
            type="button"
            colorScheme={color as Colors}
            onClick={() => changeColorScheme(color as Colors)}
          >
            {color}
          </Button>
        ))}
      </Grid>
    </Flex>
  );
}
