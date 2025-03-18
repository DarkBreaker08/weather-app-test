import { DayForecast } from "./DayForecast/DayForecast";
import styles from "./styles.module.scss";

export const NextDaysForecast = () => {
  return (
    <>
      <h2>Next days forecast</h2>

      <ul className={styles.nextDaysForecast}>
        <DayForecast />
      </ul>
    </>
  );
};
