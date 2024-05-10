/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';

type PayloadCreator<Requested, Returned> = (body: Requested, thunkApi: any) => Promise<Returned>;

export const getCreateThunk =
	(storeName: string) =>
	<Requested, Returned>(actionName: string, func: PayloadCreator<Requested, Returned>) =>
		createAsyncThunk<Returned, Requested>(
			createActionName(storeName, actionName),
			async (body: Requested, thunkApi: any): Promise<Returned> => {
				try {
					return await func(body, thunkApi);
				} catch (error) {
					return thunkApi.rejectWithValue(error);
				}
			}
		);

const createActionName = (storeName: string, actionName: string) => {
	return `[${storeName}] ${actionName}`;
};
/* eslint-enable @typescript-eslint/no-explicit-any */
