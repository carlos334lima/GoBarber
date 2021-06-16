/* eslint-disable */
import React from 'react';

import GlobalStyles from './styles/global';

import AppProvider from './hooks';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
