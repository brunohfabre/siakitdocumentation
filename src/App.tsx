import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './routes';
import { GlobaStyle } from './styles/global';

export function App(): JSX.Element {
  return (
    <>
      <GlobaStyle />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
