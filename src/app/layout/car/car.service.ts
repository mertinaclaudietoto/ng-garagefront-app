import { Injectable } from '@angular/core';
import { IdName } from './car-type/car-type';
import { CARTYPE } from './car-type/dataCartype';
import { filter } from 'rxjs';
import { CARLIST } from './data-car';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor() { }

  getCar():Car[]{
    return CARLIST;
  }
  modifOrAddCar(value:Car){
    const index = CARLIST.findIndex(car => car.id === value.id);
    if (index !== -1) {
      CARLIST[index] = value;
    } else {
      value.id = Math.max(...CARLIST.map(car => car.id)) + 1;
      CARLIST.push(value);
    }
  }
  deleteCar(value:Car){
    const index = CARLIST.findIndex(car => car.id === value.id);
    if (index !== -1) {
      CARLIST.splice(index, 1);
    }
  }

  getCarType(index:string):IdName[]{
    return CARTYPE[index];
  }

  modifOrAddCarType(indexd:string,value:IdName){
    const index = CARTYPE[indexd].findIndex(car => car.id === value.id);
    if (index !== -1) {
      CARTYPE[indexd][index] = value;
    } else {
      value.id = Math.max(...CARTYPE[indexd].map(car => car.id)) + 1;
      CARTYPE[indexd].push(value);
    }
  }
  deleteCarType(indexd:string,value:IdName){
    const index = CARTYPE[indexd].findIndex(car => car.id === value.id);
    if (index !== -1) {
      CARTYPE[indexd].splice(index, 1);
    }
  }
}
