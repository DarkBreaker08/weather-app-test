import { CurrentWeather } from "../CurrentWeather/CurrentWeather";
import { WeatherParameters } from "../WeatherParameters/WeatherParameters";
import styles from "./styles.module.scss";

export const Weather = () => {
  return (
    <header className={styles.weather}>
      <CurrentWeather />
      <WeatherParameters />
    </header>
  );
};
