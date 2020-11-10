import { ICity, IWeather } from '@app/weather/intefaces';
import { createAction, props } from '@ngrx/store';


export const getCities = createAction(
  '[Weather Api] Get Cities'
);

export const getCitiesSuccess = createAction(
  '[Weather Api] Get Cities Success',
  props<{ cities: Array<ICity> }>()
);

export const getWeather = createAction(
  '[Weather Api] Get Weather',
  props<{ cityId: number }>()
);

export const getWeatherSuccess = createAction(
  '[Weather Api] Get Weather Success',
  props<{ weather: IWeather }>()
);

