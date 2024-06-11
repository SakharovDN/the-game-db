export type HttpParams = Record<string, Date | boolean | number | number[] | string | string[] | undefined>;

export interface RequestWithPagination extends HttpParams {
	page: number;
	page_size: number;
}

export interface ResponseWithPagination<T> {
	count: number;
	next?: string;
	previous?: string;
	results: T[];
}
