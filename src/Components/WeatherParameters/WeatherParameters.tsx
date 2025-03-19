import { CitySelect } from "../CitySelect/CitySelect";
import { NextDaysForecast } from "../NextDaysForecast/NextDaysForecast";
import { WeatherStatistics } from "../WeatherStatistics/WeatherStatistics";
import styles from "./styles.module.scss";

type WeatherParametersProps = {
  onCityChange: (cityName: string) => void;
};

export const WeatherParameters = ({ onCityChange }: WeatherParametersProps) => {
  return (
    <div className={styles.weatherParameters}>
      <CitySelect onCityChange={onCityChange} />
      <WeatherStatistics />
      <NextDaysForecast />
    </div>
  );
};
