import { createSlice } from "@reduxjs/toolkit";
import { Game } from "../../models/game";
import { HOME_STORE_NAME, getNewReleases } from "./home.thunks";

export interface HomeState {
  newReleases: Game[];
  newReleasesPage: number;
  newReleasesCount: number;
  newReleasesLoading: boolean;
  newReleasesError: any;
}

const INITIAL_HOME_STATE: HomeState = {
  newReleases: [],
  newReleasesPage: 0,
  newReleasesCount: 0,
  newReleasesLoading: false,
  newReleasesError: undefined,
};

const homeSlice = createSlice({
  initialState: INITIAL_HOME_STATE,
  name: HOME_STORE_NAME,
  reducers: {},
  extraReducers: (builder) =>
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
        state.newReleases = state.newReleases.concat(payload.results);
      })
      .addCase(getNewReleases.rejected, (state, { payload }) => {
        state.newReleasesLoading = false;
        state.newReleasesError = payload;
      }),
});

export const homeReducer = homeSlice.reducer;
