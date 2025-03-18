import { Car } from "../../../layout/car/car";
import { Client } from "../../sign-in/models/client.model";

export interface FixCar {
    workId: string
    name: string
}

export interface Work {
    id: string,
    client: Client,
    car: Car,
    fixCar: FixCar[]
}

