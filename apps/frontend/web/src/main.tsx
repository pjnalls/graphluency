import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider as AppStateProvider } from 'react-redux';

import App from './app/app';

import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <AppStateProvider store={store}>
      <App />
    </AppStateProvider>
  </StrictMode>
);
