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

  forecast: {
    forecastday: {
      date: string;
      day: {
        condition: {
          text: string;
        };
        mintemp_c: number;
        maxtemp_c: number;
      };
    }[];
  };
};
