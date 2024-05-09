import { GameOrdering } from "../../../../models/game";
import { RequestWithPagination } from "../../../../models/requests";

export interface GetGamesRequest extends RequestWithPagination {
  ordering?: GameOrdering;
}
