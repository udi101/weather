import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from '@app/weather/intefaces';

@Component({
  selector: 'weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {

  @Input() weather: IWeather;

  constructor() { }

  ngOnInit(): void {
  }

  getIconSrc(): string {
    return 'http://openweathermap.org/img/wn/' + this.weather.weather[0].icon + '@2x.png';
  }
}


