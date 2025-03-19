import { WeatherData } from "../../types/types";
import styles from "./styles.module.scss";

type WeatherStatisticsProps = {
  data: WeatherData;
};

export const WeatherStatistics = ({ data }: WeatherStatisticsProps) => {
  return (
    <>
      <h2 className={styles.temperature}>{data.current.temp_c} &#176;C</h2>
      <p className={styles.humidity}>Humidity: {data.current.humidity}%</p>
      <p className={styles.cloudy}>Cloudy: {data.current.cloud}%</p>
      <p className={styles.wind}>Wind:</p>
      <p className={styles.pressure}>Atmospheric Pressure</p>
    </>
  );
};
