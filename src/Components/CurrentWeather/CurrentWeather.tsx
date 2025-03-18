import styles from "./styles.module.scss";

export const CurrentWeather = () => {
  return (
    <div className={styles.currentWeather}>
      <h1 className={styles.weatherInfo}></h1>
      <div className={styles.currentTimeData}>
        <div className="currentDate"></div>
        <div className={styles.currentHour}></div>
      </div>
    </div>
  );
};
