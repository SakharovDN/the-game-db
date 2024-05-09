import { createAsyncThunk } from '@reduxjs/toolkit';

type PayloadCreator<Requested, Returned> = (body: Requested, thunkApi: any) => Promise<Returned>;

export const getCreateThunk =
  (storeName: string) =>
  <Requested, Returned>(actionName: string, func: PayloadCreator<Requested, Returned>) =>
    createAsyncThunk<Returned, Requested>(createActionName(storeName, actionName), rejectCatcher(func));

const rejectCatcher =
  <Requested, Returned>(func: PayloadCreator<Requested, Returned>) =>
  async (body: Requested, thunkApi: any): Promise<Returned> => {
    try {
      return await func(body, thunkApi);
    } catch (e) {
      return thunkApi.rejectWithValue(e);
    }
  };

function createActionName(storeName: string, actionName: string) {
  return `[${storeName}] ${actionName}`;
}
