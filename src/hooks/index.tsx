import { ReactNode } from 'react';

import { ThemeProvider } from './theme';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>;
}
