import { WeatherData } from "../../types/types";
import { months, weekDays } from "../../utils/dateElements";
import { DayForecast } from "./DayForecast/DayForecast";
import styles from "./styles.module.scss";

type NextDaysForecastProps = {
  data: WeatherData;
};

export const NextDaysForecast = ({ data }: NextDaysForecastProps) => {
  const days = data.forecast.forecastday;
  const dateValues = {
    firstDayDate: new Date(days[0].date),
    secondDayDate: new Date(days[1].date),
    thirdDayDate: new Date(days[2].date),
  };

  const { firstDayDate, secondDayDate, thirdDayDate } = dateValues;

  const dateStructures = {
    firstDayMonth: months[firstDayDate.getMonth()],
    firstDayMonthDay: firstDayDate.getDate(),
    firstDayWeekDay: weekDays[firstDayDate.getDay()],

    secondDayMonth: months[secondDayDate.getMonth()],
    secondDayMonthDay: secondDayDate.getDate(),
    secondDayWeekDay: weekDays[secondDayDate.getDay()],

    thirdDayMonth: months[thirdDayDate.getMonth()],
    thirdDayMonthDay: thirdDayDate.getDate(),
    thirdDayWeekDay: weekDays[thirdDayDate.getDay()],
  };

  const {
    firstDayMonth,
    firstDayMonthDay,
    firstDayWeekDay,
    secondDayMonth,
    secondDayMonthDay,
    secondDayWeekDay,
    thirdDayMonth,
    thirdDayMonthDay,
    thirdDayWeekDay,
  } = dateStructures;

  return (
    <>
      <h2>Next days forecast</h2>

      <ul className={styles.nextDaysForecast}>
        <DayForecast
          date={`${firstDayWeekDay} ${firstDayMonth} ${firstDayMonthDay}`}
          weather={data.forecast.forecastday[0].day.condition.text}
          smallestTemp={data.forecast.forecastday[0].day.mintemp_c}
          highestTemp={data.forecast.forecastday[0].day.maxtemp_c}
        />
        <DayForecast
          date={`${secondDayWeekDay} ${secondDayMonth} ${secondDayMonthDay}`}
          weather={data.forecast.forecastday[1].day.condition.text}
          smallestTemp={data.forecast.forecastday[1].day.mintemp_c}
          highestTemp={data.forecast.forecastday[1].day.maxtemp_c}
        />
        <DayForecast
          date={`${thirdDayWeekDay} ${thirdDayMonth} ${thirdDayMonthDay}`}
          weather={data.forecast.forecastday[2].day.condition.text}
          smallestTemp={data.forecast.forecastday[2].day.mintemp_c}
          highestTemp={data.forecast.forecastday[2].day.maxtemp_c}
        />
      </ul>
    </>
  );
};
