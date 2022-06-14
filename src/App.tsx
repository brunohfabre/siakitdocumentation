import { BrowserRouter } from 'react-router-dom';

import { Grid } from './components/Grid';
import { AppSidebar } from './pages/_layout/AppSidebar';
import { AppRoutes } from './routes';
import { GlobaStyle } from './styles/global';

export function App(): JSX.Element {
  return (
    <Grid height="100vh" width="100vw" columns="240px 1fr">
      <BrowserRouter>
        <AppSidebar />

        <AppRoutes />
      </BrowserRouter>

      <GlobaStyle />
    </Grid>
  );
}
