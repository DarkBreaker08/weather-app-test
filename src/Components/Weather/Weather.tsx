import { useEffect, useState } from "react";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherParameters } from "../WeatherParameters/WeatherParameters";
import styles from "./styles.module.scss";
import { useApi } from "../../hooks/useApi";
import { apiKey } from "../../utils/dateElements";
import { Loading } from "../Loading/Loading";
import { WeatherData } from "../../types/types";

export const Weather = () => {
  const [city, setCity] = useState<string>("Warsaw");

  const onCityChange = (cityName: string) => {
    setCity(cityName);
  };
  const { get, loading, data } = useApi<WeatherData>();

  useEffect(() => {
    get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=6&aqi=no`
    );
  }, [city]);

  if (loading) return <Loading />;

  return (
    <header className={styles.weather}>
      <CurrentWeather data={data as WeatherData} />
      <WeatherParameters
        onCityChange={onCityChange}
        data={data as WeatherData}
      />
    </header>
  );
};
