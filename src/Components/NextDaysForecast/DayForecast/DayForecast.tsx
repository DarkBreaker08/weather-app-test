import styles from "./styles.module.scss";

type DayForecastProps = {
  date: string;
  weather: string;
  smallestTemp: number;
  highestTemp: number;
};

export const DayForecast = ({
  date,
  weather,
  smallestTemp,
  highestTemp,
}: DayForecastProps) => {
  return (
    <li className={styles.dayForecast}>
      <div>
        <h4 className={styles.reduceMarginStyle}>{date}</h4>
        <p className={styles.reduceMarginStyle}>{weather}</p>
      </div>
      <aside className={styles.higestAndSmallestTemperatures}>
        <p className={styles.reduceMarginStyle}>{smallestTemp} &#176;C</p>
        <p className={styles.reduceMarginStyle}>{highestTemp} &#176;C</p>
      </aside>
    </li>
  );
};
