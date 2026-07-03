import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { TestAlias } from '@utils/test-alias.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestAlias />
    <App />
  </StrictMode>,
);
