import { CitySelect } from "../CitySelect/CitySelect";
import { NextDaysForecast } from "../NextDaysForecast/NextDaysForecast";
import { WeatherStatistics } from "../WeatherStatistics/WeatherStatistics";
import styles from "./styles.module.scss";

export const WeatherParameters = () => {
  return (
    <div className={styles.weatherParameters}>
      <CitySelect />
      <WeatherStatistics />
      <NextDaysForecast />
    </div>
  );
};
