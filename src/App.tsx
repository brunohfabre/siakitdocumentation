import styled, { ThemeProvider } from 'styled-components';

import { useTheme } from './hooks/useTheme';
import { GlobaStyle } from './styles/global';
import { darkTheme } from './styles/themes/dark';
import { lightTheme } from './styles/themes/light';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const Box = styled.div`
  width: 128px;
  height: 64px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.violet11};
`;

export function App(): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={themes[theme as 'light' | 'dark']}>
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
        <Box />
        <h3>
          Lorem ipsum dolor sit, amet consectetur tadipisicing elit. Quo amet
          temporibus, aspernatur aliquam esse, ipsa ad dolores officiis
          perferendis, reiciendis animi ducimus molestiae qui? Enim id
          doloremque odit nostrum soluta?
        </h3>

        <button type="button" onClick={toggleTheme}>
          toggle theme
        </button>
      </div>
    </ThemeProvider>
  );
}
