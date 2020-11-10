

import { Injectable } from '@angular/core';
import { WeatherService } from '@app/weather/services/weather.service';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { WeatherApiActions } from '../actions';
import { switchMap, map } from 'rxjs/operators'
import { IWeather } from '@app/weather/intefaces';


@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) { }


  getCities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherApiActions.getCities),
      switchMap(() => this.weatherService.getCities().pipe(
        map(cities => WeatherApiActions.getCitiesSuccess({ cities }))
      ))
    )
  });



  getWeather$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(WeatherApiActions.getWeather),
      switchMap((action: { type: string, cityId: number }) => this.weatherService.getWeather(action.cityId)),
      map((weather: IWeather) => WeatherApiActions.getWeatherSuccess({ weather }))
    )
  })
}
