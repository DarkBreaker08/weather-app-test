import { CitySelect } from "../CitySelect/CitySelect";
import styles from "./styles.module.scss";

export const WeatherParameters = () => {
  return (
    <div className={styles.weatherParameters}>
      <CitySelect />
    </div>
  );
};
