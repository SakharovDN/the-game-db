import { GamesService } from "../../app/services/games.service/games.service";
import { GetGamesRequest } from "../../app/services/games.service/requests";
import { getCreateThunk } from "../../helpers/create-thunk";
import { GameOrdering } from "../../models/game";

export const HOME_STORE_NAME = "home-state";
const createThunk = getCreateThunk(HOME_STORE_NAME);

export const getNewReleases = createThunk(
  "get new releases",
  (request: GetGamesRequest) =>
    GamesService.getGames({ ...request, ordering: GameOrdering.Released })
);
