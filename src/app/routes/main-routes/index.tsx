import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '@components/header';
import { ComponentsPage } from '@pages/ComponentsPage';
import { CreatorsPage } from '@pages/CreatorsPage';
import { GamesPage } from '@pages/GamesPage';

import { RoutePath } from '../route-paths/route-path';

import './style.scss';

export const MainRoutes = () => {
  return (
    <div className={'main-routes'}>
      <Header />
      <Routes>
        <Route element={<GamesPage />} path={RoutePath.Games} />
        <Route element={<ComponentsPage />} path={RoutePath.Components} />
        <Route element={<CreatorsPage />} path={RoutePath.Creators} />
        <Route element={<Navigate to={RoutePath.Components} />} path={'*'} />
      </Routes>
    </div>
  );
};
