import styled from 'styled-components';

import { Text } from '../components/Text';
import { Colors, useTheme } from '../hooks/theme';

const Box = styled.div<{ colorScheme: Colors }>`
  width: 128px;
  height: 64px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors[props.colorScheme][11]};
`;

export function HomePage(): JSX.Element {
  const { toggleTheme, colorScheme, changeColorScheme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 32,
      }}
    >
      <Text size="lg">home page</Text>

      <Box colorScheme={colorScheme} />

      <section>
        <button type="button" onClick={toggleTheme}>
          toggle theme
        </button>

        <section>
          <button type="button" onClick={() => changeColorScheme('red')}>
            red
          </button>
          <button type="button" onClick={() => changeColorScheme('violet')}>
            violet
          </button>
          <button type="button" onClick={() => changeColorScheme('green')}>
            green
          </button>
          <button type="button" onClick={() => changeColorScheme('blue')}>
            blue
          </button>
          <button type="button" onClick={() => changeColorScheme('gray')}>
            gray
          </button>
          <button type="button" onClick={() => changeColorScheme('orange')}>
            orange
          </button>
        </section>
      </section>
    </div>
  );
}
