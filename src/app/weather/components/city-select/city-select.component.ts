import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ICity } from '@app/weather/intefaces';


@Component({
  selector: 'city-select',
  templateUrl: './city-select.component.html',
  styleUrls: ['./city-select.component.scss']
})
export class CitySelectComponent implements OnInit {


  @Input() cities: Array<ICity>;
  @Output() citySelected = new EventEmitter<number>();
  cityId: number;
  constructor() { }

  ngOnInit(): void {
  }

  setCityId(cityId: number) {
    this.cityId = cityId;
  }
  citySelectedEmitter(cityId: number) {
    this.citySelected.emit(cityId);
  }
}
