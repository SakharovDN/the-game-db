import { GameOrdering } from '@models/game';
import { RequestWithPagination } from '@types';

export interface GetGamesRequest extends RequestWithPagination {
  ordering?: GameOrdering;
}
