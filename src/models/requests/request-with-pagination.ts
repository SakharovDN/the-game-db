import { HttpParams } from '@types';

export interface RequestWithPagination extends HttpParams {
	page: number;
	page_size: number;
}
