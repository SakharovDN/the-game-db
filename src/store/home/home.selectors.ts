import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

import { HomeState } from './home.slice';

const selectHomeState: (state: RootState) => HomeState = state => state.homeState;

const selectNewReleases = createSelector(selectHomeState, state => state.newReleases);
const selectTopRated = createSelector(selectHomeState, state => state.topRated);

export const homeSelectors = { selectNewReleases, selectTopRated };
