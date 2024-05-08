interface Environment {
  rawgApiBaseUrl: string;
  rawgApiKey: string;
}

export const environment: Environment = {
  rawgApiBaseUrl: process.env.REACT_APP_RAWG_API_BASE_URL!,
  rawgApiKey: process.env.REACT_APP_RAWG_API_KEY!,
};
