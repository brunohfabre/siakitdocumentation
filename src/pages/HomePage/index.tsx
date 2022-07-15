import { HiCheckCircle } from 'react-icons/hi';
import styled from 'styled-components';

import DarkThemeImage from '../../assets/theme/dark-theme.svg';
import LightThemeImage from '../../assets/theme/light-theme.svg';
import SystemThemeImage from '../../assets/theme/system-theme.svg';
import { Button } from '../../components/Button';
import { Flex } from '../../components/Flex';
import { Grid } from '../../components/Grid';
import { Heading } from '../../components/Heading';
import { Spacer } from '../../components/Spacer';
import { Text } from '../../components/Text';
import { colors, Colors, useTheme } from '../../hooks/theme';
import { ThemeButton } from './styles';

const Box = styled.div<{ colorScheme: Colors }>`
  width: 128px;
  height: 64px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors[props.colorScheme][9]};
`;

export function HomePage(): JSX.Element {
  const { toggleTheme, colorScheme, changeColorScheme, theme } = useTheme();

  return (
    <Flex flex justify="center" align="center" direction="column" gap>
      <Text size="lg">Appearence</Text>

      <Box colorScheme={colorScheme} />

      <Spacer height />

      <Text size="lg">Theme</Text>

      <Flex gap>
        <Flex gap>
          <ThemeButton type="button" onClick={() => toggleTheme('light')}>
            <div>
              <img src={LightThemeImage} alt="" width={128} />
              {theme === 'light' && <HiCheckCircle size={32} color="black" />}
            </div>
            <Text size="md">Light</Text>
          </ThemeButton>

          <ThemeButton type="button" onClick={() => toggleTheme('dark')}>
            <div>
              <img src={DarkThemeImage} alt="" width={128} />
              {theme === 'dark' && <HiCheckCircle size={32} color="white" />}
            </div>
            <Text size="md">Dark</Text>
          </ThemeButton>

          {/* <ThemeButton>
            <div>
              <img src={SystemThemeImage} alt="" width={128} />
              {theme === 'system' && <HiCheckCircle size={32} color="black" />}
            </div>
            <Heading size="md">System</Heading>
          </ThemeButton> */}
        </Flex>

        {/* <Button type="button" onClick={() => toggleTheme('light')}>
          switch to light
        </Button>

        <Button type="button" onClick={() => toggleTheme('dark')}>
          switch to dark
        </Button> */}
      </Flex>

      <Spacer height />

      <Text size="lg">Accent color</Text>

      <Grid columns={7} gap={8}>
        {Object.keys(colors).map((color) => (
          <Button
            key={color}
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
