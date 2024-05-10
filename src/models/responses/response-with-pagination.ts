export interface ResponseWithPagination<T> {
	count: number;
	next?: string;
	previous?: string;
	results: T[];
}
