import { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'react-day-picker/dist/style.css';

import { StyledToastContainer } from '../components/Toast';
import { ThemeProvider } from './theme';

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps): JSX.Element {
  return (
    <ThemeProvider>
      <StyledToastContainer />

      {children}
    </ThemeProvider>
  );
}
