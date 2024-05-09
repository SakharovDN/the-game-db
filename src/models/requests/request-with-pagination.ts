import { HttpParams } from '../../types/http-types';

export interface RequestWithPagination extends HttpParams {
  page: number;
  page_size: number;
}
