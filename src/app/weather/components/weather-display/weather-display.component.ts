import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IWeather } from '@app/weather/intefaces';

@Component({
  selector: 'weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit, OnChanges {

  iconSrc: string;
  weatherDescription: string;
  @Input() weather: IWeather;

  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!!changes.weather.currentValue) {
      const iconCode = changes.weather.currentValue.weather[0].icon;
      this.iconSrc = 'http://openweathermap.org/img/wn/' + iconCode + '@2x.png'
      this.weatherDescription = this.weather.weather[0].main;
    }
  }
  getIconSrc(): string {
    return 'http://openweathermap.org/img/wn/' + this.weather.weather[0].icon + '@2x.png';
  }
}


