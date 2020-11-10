import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IWeatherState } from '../reducers/weather.reducer';

export const getWeatherFeatureState = createFeatureSelector<IWeatherState>('weather');

export const getCities = createSelector(
  getWeatherFeatureState,
  state => state.cities
);

export const getWeather = createSelector(
  getWeatherFeatureState,
  state => state.weather
)
