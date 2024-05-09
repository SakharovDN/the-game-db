import { configureStore } from "@reduxjs/toolkit";
import { HomeState, homeReducer } from "./home/home.slice";

export interface RootState {
  homeState: HomeState;
}

export const configureAppStore = () => {
  return configureStore<RootState>({
    reducer: {
      homeState: homeReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};
