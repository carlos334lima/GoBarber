/* eslint-disable linebreak-style */
import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyles from './styles/global';
import { AuthProvider } from './context/AuthContext';
import ToastContainer from './components/ToastContainer';

/* import Toast from './components/ToastContainer/Toast' */

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyles />
  </>
);

export default App;
