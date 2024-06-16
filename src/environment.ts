interface Environment {
  rawgApiBaseUrl: string;
  rawgApiKey: string;
}

export const environment: Environment = {
  rawgApiBaseUrl: import.meta.env.VITE_RAWG_API_BASE_URL!,
  rawgApiKey: import.meta.env.VITE_RAWG_API_KEY!,
};
