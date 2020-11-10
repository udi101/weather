export interface IWeather {
  temp: number,
  name: string,
  weather: [{ main: string, icon: string }]
  main: {
    temp: number,
    humidity: number,
    pressure: number
  }
}
