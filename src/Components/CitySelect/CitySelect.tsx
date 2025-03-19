import { ChangeEvent } from "react";
import styles from "./styles.module.scss";

type CitySelectProps = {
  onCityChange: (cityName: string) => void;
};

export const CitySelect = ({ onCityChange }: CitySelectProps) => {
  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    onCityChange(city);
  };

  return (
    <select
      name="cities"
      id="citySelect"
      className={styles.citySelect}
      onChange={handleCityChange}
    >
      <option value="Warsaw">Warsaw, Poland</option>
      <option value="London">London, Great Britain</option>
      <option value="Moscow">Moscow, Russia</option>
      <option value="Paris">Paris, France</option>
      <option value="Madrid">Madrid, Spain</option>
      <option value="Barcelona">Barcelona, Spain</option>
      <option value="Rome">Rome, Italy</option>
      <option value="Berlin">Berlin, Germany</option>
      <option value="Kyiv">Kyiv, Ukraine</option>
      <option value="Baku">Baku, Azerbaijan</option>
      <option value="Vienna">Vienna, Austria</option>
      <option value="Minsk">Minsk, Belarus</option>
      <option value="Hamburg">Hamburg, Germany</option>
      <option value="Bucharest">Bucharest, Romania</option>
      <option value="Budapest">Budapest, Hungary</option>
      <option value="Belgrade">Belgrade, Serbia</option>
      <option value="Munich">Munich, Germany</option>
      <option value="Kharkiv">Kharkiv, Ukraine</option>
      <option value="Prague">Prague, Czech Republic</option>
    </select>
  );
};
