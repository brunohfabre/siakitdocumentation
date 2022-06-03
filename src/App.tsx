import styled from 'styled-components';

import { Colors, useTheme } from './hooks/theme';
import { GlobaStyle } from './styles/global';

const Box = styled.div<{ colorScheme: Colors }>`
  width: 128px;
  height: 64px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors[props.colorScheme][11]};
`;

export function App(): JSX.Element {
  const { toggleTheme, colorScheme, changeColorScheme } = useTheme();

  return (
    <>
      <GlobaStyle />

      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Box colorScheme={colorScheme} />
        <h3>
          Lorem ipsum dolor sit, amet consectetur tadipisicing elit. Quo amet
          temporibus, aspernatur aliquam esse, ipsa ad dolores officiis
          perferendis, reiciendis animi ducimus molestiae qui? Enim id
          doloremque odit nostrum soluta?
        </h3>

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
      </div>
    </>
  );
}
