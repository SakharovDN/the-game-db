import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { history } from '@src/history';

import { CustomRouter } from './routes/custom-router';
import { MainRoutes } from './routes/main-routes';

export const App = () => {
  return (
    <CustomRouter history={history}>
      {/* TODO: Create loader */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainRoutes />} index path={'*'} />
        </Routes>
      </Suspense>
    </CustomRouter>
  );
};
