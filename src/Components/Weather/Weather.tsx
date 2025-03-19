import { useState } from "react";
import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherParameters } from "../WeatherParameters/WeatherParameters";
import styles from "./styles.module.scss";

export const Weather = () => {
  const [city, setCity] = useState<string>("Warsaw");

  const onCityChange = (cityName: string) => {
    setCity(cityName);
  };

  return (
    <header className={styles.weather}>
      <CurrentWeather />
      <WeatherParameters onCityChange={onCityChange} />
    </header>
  );
};
