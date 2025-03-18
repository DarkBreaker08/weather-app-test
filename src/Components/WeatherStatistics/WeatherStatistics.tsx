import styles from "./styles.module.scss";

export const WeatherStatistics = () => {
  return (
    <>
      <h2 className={styles.temperature}></h2>
      <p className={styles.humidity}>Humidity:</p>
      <p className={styles.cloudy}>Cloudy:</p>
      <p className={styles.wind}>Wind:</p>
      <p className={styles.pressure}>Atmospheric Pressure</p>
    </>
  );
};
