import { CarClient } from "./car-client";
import { Emp } from "./emp";
import { Service } from "./service.model";

export interface Task {
    _id?: string;
    service: Service;
    mechanic: Emp;
    carCustomer: CarClient
    prix: number;
    datedebut: Date;
    datefin: Date;
    is_finished: boolean;
}