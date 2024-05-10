import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store-config';
import { HomeState } from './home.slice';

const selectHomeState: (state: RootState) => HomeState = state => state.homeState;

const selectNewReleases = createSelector(selectHomeState, state => state.newReleases);

export const homeSelectors = { selectNewReleases };
