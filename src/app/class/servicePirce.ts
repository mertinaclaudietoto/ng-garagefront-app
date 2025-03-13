import { Car } from "./car";
import { IdName } from './car-type';

export class ServicePrice {
    _id: number;
    car: Car;
    service: IdName;
    price: number;

    // Constructeur pour initialiser les propriétés
    constructor(
        _id: number,
        car: Car,
        service: IdName,
        price: number
    ) {
        this._id = _id;
        this.car = car;
        this.service = service;
        this.price = price;
    }
}
