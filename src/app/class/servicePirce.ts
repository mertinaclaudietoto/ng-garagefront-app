import { Car } from "./car";
import { IdName } from './car-type';

export class ServicePrice {
    _id: number;
    car: Car;
    service: IdName;
    price: number;
   
    constructor(
      _id: number = 0,            
      car: Car = new Car(), 
      service: IdName = { _id: 0, name: '' },  
      price: number = 0        
    ) {
      this._id = _id;
      this.car = car;
      this.service = service;
      this.price = price;
    }
  }
  
