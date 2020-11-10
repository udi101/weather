export interface IWeather {
  temp: number,
  name: string,
  weather: [{ icon: string }]
  main: {
    temp: number
  }
}
