import { HttpUtils } from '@helpers';
import { Game } from '@models/game';
import { ResponseWithPagination } from '@models/responses';
import { RawgApiHttpClient } from '@services/http';

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
