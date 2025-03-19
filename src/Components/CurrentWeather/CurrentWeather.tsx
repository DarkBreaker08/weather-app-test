import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { months } from "../../utils/dateElements";

export const CurrentWeather = () => {
  const currentDate = new Date();
  const [currentDateValues, setCurrentDateValues] = useState({
    currentYear: currentDate.getFullYear(),
    currentMonth: months[currentDate.getMonth()],
    dayOfTheMonth: currentDate.getDate(),
    currentHour: currentDate.getHours(),
    currentMinutes: currentDate.getMinutes(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentDateValues({
        currentYear: date.getFullYear(),
        currentMonth: months[date.getMonth()],
        dayOfTheMonth: date.getDate(),
        currentHour: date.getHours(),
        currentMinutes: date.getMinutes(),
      });
    }, 60000);
  }, []);

  const {
    currentYear,
    currentHour,
    currentMinutes,
    currentMonth,
    dayOfTheMonth,
  } = currentDateValues;

  return (
    <div className={styles.currentWeather}>
      <h1 className={styles.weatherInfo}></h1>
      <div className={styles.currentTimeData}>
        <div className="currentDate">
          {dayOfTheMonth} {currentMonth} {currentYear}
        </div>
        <div className={styles.currentHour}>
          {currentHour < 10 ? `0${currentHour}` : currentHour}:
          {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}
        </div>
      </div>
    </div>
  );
};
