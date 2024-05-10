import { configureStore } from '@reduxjs/toolkit';

import { HomeState, homeReducer } from './home';

export interface RootState {
  homeState: HomeState;
}

export const configureAppStore = () => {
  return configureStore<RootState>({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: {
      homeState: homeReducer,
    },
  });
};
