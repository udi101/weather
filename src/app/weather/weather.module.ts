import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';


import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './containers/weather/weather.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './state/effects/weather.effects';

import { CitySelectComponent } from './components/city-select/city-select.component';
import { weatherReducer } from './state/reducers/weather.reducer';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';

@NgModule({
  declarations: [WeatherComponent, CitySelectComponent, WeatherDisplayComponent],
  imports: [
    CommonModule,
    SharedModule,
    WeatherRoutingModule,
    EffectsModule.forFeature([WeatherEffects]),
    StoreModule.forFeature('weather', weatherReducer)
  ]
})
export class WeatherModule { }
