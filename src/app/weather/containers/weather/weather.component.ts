import { Component, Input, OnInit } from '@angular/core';
import { ICity, IWeather } from '@app/weather/intefaces';
import { WeatherApiActions } from '@app/weather/state/actions';
import { IWeatherState } from '@app/weather/state/reducers/weather.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as WeatherSelectors from '@app/weather/state/selectors';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {


  getCities$: Observable<Array<ICity>>;
  getWeather$: Observable<IWeather>;

  constructor(private store: Store<IWeatherState>) { }

  ngOnInit(): void {
    this.store.dispatch(WeatherApiActions.getCities());

    this.getCities$ = this.store.select(WeatherSelectors.getCities);
    this.getWeather$ = this.store.select(WeatherSelectors.getWeather)

  }

  citySelected(cityId: number) {
    this.store.dispatch(WeatherApiActions.getWeather({ cityId }));
  }

}
