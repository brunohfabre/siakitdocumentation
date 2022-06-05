import { BrowserRouter } from 'react-router-dom';

import { Flex } from './components/Flex';
import { AppRoutes } from './routes';
import { GlobaStyle } from './styles/global';

export function App(): JSX.Element {
  return (
    <Flex height="100vh" width="100vw">
      <GlobaStyle />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Flex>
  );
}
