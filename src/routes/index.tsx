import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';

export function Router() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
