import { getCreateThunk } from '@helpers';
import { GamesService } from '@services/games.service/games.service';
import { GetGamesRequest } from '@services/games.service/requests';
import { format } from 'date-fns';

export const HOME_STORE_NAME = 'home-state';
const createThunk = getCreateThunk(HOME_STORE_NAME);

export const getNewReleases = createThunk('get new releases', (request: GetGamesRequest) =>
  GamesService.getGames({ ...request, ordering: '-released', dates: `1960-01-01,${format(Date.now(), 'yyyy-MM-dd')}` })
);

export const getTopRated = createThunk('get top rated', (request: GetGamesRequest) =>
  GamesService.getGames({ ...request, ordering: '-rating' })
);
