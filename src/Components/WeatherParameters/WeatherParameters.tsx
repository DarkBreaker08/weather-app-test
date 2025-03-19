import { WeatherData } from "../../types/types";
import { CitySelect } from "../CitySelect/CitySelect";
import { NextDaysForecast } from "../NextDaysForecast/NextDaysForecast";
import { WeatherStatistics } from "../WeatherStatistics/WeatherStatistics";
import styles from "./styles.module.scss";

type WeatherParametersProps = {
  onCityChange: (cityName: string) => void;
  data: WeatherData;
};

export const WeatherParameters = ({
  onCityChange,
  data,
}: WeatherParametersProps) => {
  return (
    <div className={styles.weatherParameters}>
      <CitySelect onCityChange={onCityChange} />
      <WeatherStatistics data={data as WeatherData} />
      <NextDaysForecast data={data as WeatherData} />
    </div>
  );
};
