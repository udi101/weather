import { ICity, IWeather } from '@app/weather/intefaces';
import { createReducer, on } from '@ngrx/store';
import * as AppState from 'src/app/reducers';
import { WeatherApiActions } from '../actions';


export interface IWeatherState extends AppState.IAppState {
  cities: Array<ICity>,
  currentCity: ICity,
  weather: IWeather
}


const initialState: IWeatherState = {
  cities: [],
  currentCity: null,
  weather: null
}


export const weatherReducer = createReducer<IWeatherState>(initialState,
  on(WeatherApiActions.getCitiesSuccess, (weatherState, action) => {
    return { ...weatherState, cities: action.cities };
  }),

  on(WeatherApiActions.getWeatherSuccess, (weatherState, action) => {
    return { ...weatherState, weather: action.weather };
  })
);
