import { Game } from '@models/game';
import { createSlice } from '@reduxjs/toolkit';

import { HOME_STORE_NAME, getNewReleases, getTopRated } from './home.thunks';

export interface HomeState {
  newReleases: Game[];
  newReleasesCount: number;
  newReleasesError: unknown;
  newReleasesLoading: boolean;
  newReleasesPage: number;

  topRated: Game[];
  topRatedCount: number;
  topRatedError: unknown;
  topRatedLoading: boolean;
  topRatedPage: number;
}

const INITIAL_HOME_STATE: HomeState = {
  newReleases: [],
  newReleasesCount: 0,
  newReleasesError: undefined,
  newReleasesLoading: false,
  newReleasesPage: 0,

  topRated: [],
  topRatedCount: 0,
  topRatedError: undefined,
  topRatedLoading: false,
  topRatedPage: 0,
};

const homeSlice = createSlice({
  extraReducers: builder =>
    builder
      .addCase(getNewReleases.pending, (state, { meta: { arg } }) => {
        state.newReleasesLoading = true;
        state.newReleasesError = undefined;
        state.newReleasesPage = arg.page;
        if (arg.page === 0) {
          state.newReleases = [];
        }
      })
      .addCase(getNewReleases.fulfilled, (state, { payload }) => {
        state.newReleasesLoading = false;
        state.newReleasesCount = payload.count;
        state.newReleases = [...state.newReleases, ...payload.results];
      })
      .addCase(getNewReleases.rejected, (state, { payload }) => {
        state.newReleasesLoading = false;
        state.newReleasesError = payload;
      })
      .addCase(getTopRated.pending, (state, { meta: { arg } }) => {
        state.topRatedLoading = true;
        state.topRatedError = undefined;
        state.topRatedPage = arg.page;
        if (arg.page === 0) {
          state.topRated = [];
        }
      })
      .addCase(getTopRated.fulfilled, (state, { payload }) => {
        state.topRatedLoading = false;
        state.topRatedCount = payload.count;
        state.topRated = [...state.topRated, ...payload.results];
      })
      .addCase(getTopRated.rejected, (state, { payload }) => {
        state.topRatedLoading = false;
        state.topRatedError = payload;
      }),
  initialState: INITIAL_HOME_STATE,
  name: HOME_STORE_NAME,
  reducers: {},
});

export const homeReducer = homeSlice.reducer;
