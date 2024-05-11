import { getCreateThunk } from '@helpers';
import { GameOrdering } from '@models/game';
import { GamesService } from '@services/games.service/games.service';
import { GetGamesRequest } from '@services/games.service/requests';

export const HOME_STORE_NAME = 'home-state';
const createThunk = getCreateThunk(HOME_STORE_NAME);

export const getNewReleases = createThunk('get new releases', (request: GetGamesRequest) =>
	GamesService.getGames({ ...request, ordering: GameOrdering.Released })
);
