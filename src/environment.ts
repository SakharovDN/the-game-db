interface Environment {
  baseUrl: string;
  rawgApiBaseUrl: string;
  rawgApiKey: string;
}

export const environment: Environment = {
  baseUrl: import.meta.env.BASE_URL!,
  rawgApiBaseUrl: import.meta.env.VITE_RAWG_API_BASE_URL!,
  rawgApiKey: import.meta.env.VITE_RAWG_API_KEY!,
};
