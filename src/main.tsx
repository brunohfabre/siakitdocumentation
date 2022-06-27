import React from 'react';

import ReactDOM from 'react-dom/client';

import { App } from './App';
import { SiakitProvider } from './hooks';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SiakitProvider>
      <App />
    </SiakitProvider>
  </React.StrictMode>,
);
