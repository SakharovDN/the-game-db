import { RawgApiHttpClient } from "../http";

class GamesServiceImpl {
  private readonly apiEndpoint: string = "/games";

  getGames = async (): Promise<any> => {
    return RawgApiHttpClient.get<any>(`${this.apiEndpoint}`).then(
      (response) => response.data
    );
  };
}

export const GamesService = new GamesServiceImpl();
