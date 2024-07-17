import { HttpUtils } from '@helpers';
import { Game } from '@models/game';
import { RawgApiHttpClient } from '@services/http';
import { ResponseWithPagination } from '@types';

import { GetGamesRequest } from './requests';

class GamesServiceImpl {
  private readonly apiEndpoint: string = '/games';

  getGames = (httpParams: GetGamesRequest): Promise<ResponseWithPagination<Game>> => {
    const params = HttpUtils.toURLSearchParams(httpParams);
    return RawgApiHttpClient.get<ResponseWithPagination<Game>>(`${this.apiEndpoint}`, { params }).then(
      response => response.data
    );
  };
}

export const GamesService = new GamesServiceImpl();
