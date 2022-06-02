import { ReactNode } from 'react';

import { ThemeProvider } from './useTheme';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>;
}
