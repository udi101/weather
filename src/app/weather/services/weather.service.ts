import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { observable, Observable, of } from 'rxjs';
import { ICity, IWeather } from '../intefaces';
import { IWeatherState } from '../state/reducers/weather.reducer';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather(cityId: number): Observable<any> {
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${appId}`);
  }

  getCities(): Observable<Array<ICity>> {
    return cities$;
  }
}


export const appId = '1890fcd579ac51bb12f42af3ceed6428';

export const cities$ = new Observable<Array<ICity>>((observer) => {
  setTimeout(() => {
    observer.next(cities);
  }, 1000);
  setTimeout(() => {
    observer.complete();
  }, 1200);
});



export const cities: Array<ICity> = [
  {
    id: 707860,
    name: 'Hurzuf',
    country: 'UA',
    coord: {
      lon: 34.283333,
      lat: 44.549999
    }
  },
  {
    id: 519188,
    name: 'Novinki',
    country: 'RU',
    coord: {
      lon: 37.666668,
      lat: 55.683334
    }
  },
  {
    id: 1283378,
    name: 'Gorkhā',
    country: 'NP',
    coord: {
      lon: 84.633331,
      lat: 28
    }
  },
  {
    id: 2051302,
    name: 'Priiskovyy',
    country: 'RU',
    coord: {
      lon: 132.822495,
      lat: 42.819168
    }
  },
  {
    id: 563692,
    name: 'Dzhaga',
    country: 'RU',
    coord: {
      lon: 42.650002,
      lat: 43.25
    }
  },
  {
    id: 481725,
    name: 'Tret’ya Rota',
    country: 'RU',
    coord: {
      lon: 39.681389,
      lat: 43.741943
    }
  },
  {
    id: 2638976,
    name: 'Ruislip',
    country: 'GB',
    coord: {
      lon: -0.42341,
      lat: 51.573441
    }
  }];
