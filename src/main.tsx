import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import { GlobalStyle, theme } from '@styles';

import { TestAlias } from '@utils/test-alias.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TestAlias />

      <App />
    </ThemeProvider>
  </StrictMode>,
);
