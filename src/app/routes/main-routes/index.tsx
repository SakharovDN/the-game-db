import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from '@components/header';
import { CreatorsPage } from '@pages/CreatorsPage';
import { DevelopersPage } from '@pages/DevelopersPage';
import { GamesPage } from '@pages/GamesPage';

import { RoutePath } from '../route-paths/route-path';

import './style.scss';

export const MainRoutes = () => {
  return (
    <div className={'main-routes'}>
      <Header />
      <Routes>
        <Route element={<GamesPage />} path={RoutePath.Games} />
        <Route element={<DevelopersPage />} path={RoutePath.Developers} />
        <Route element={<CreatorsPage />} path={RoutePath.Creators} />
        <Route element={<Navigate to={RoutePath.Games} />} path={'*'} />
      </Routes>
    </div>
  );
};
