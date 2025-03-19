import { apiKey } from "../utils/dateElements";
import { useApi } from "./useApi";

export const useWeather = (cityName: string) => {
  const { loading, error, data, get } = useApi();
  get(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=6&aqi=no`
  );

  return { data, loading, error };
};
