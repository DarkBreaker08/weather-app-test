import styles from "./styles.module.scss";

export const DayForecast = () => {
  return (
    <li className={styles.dayForecast}>
      <div>
        <h4 className={styles.reduceMarginStyle}></h4>
        <p className={styles.reduceMarginStyle}></p>
      </div>
      <aside className={styles.higestAndSmallestTemperatures}>
        <p className={styles.reduceMarginStyle}></p>
        <p className={styles.reduceMarginStyle}></p>
      </aside>
    </li>
  );
};
