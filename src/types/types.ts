export type WeatherData = {
  current: {
    temp_c: number;
    cloud: number;
    humidity: number;
    wind_kph: number;
    pressure_mb: number;
    condition: {
      text: string;
    };
  };
};
