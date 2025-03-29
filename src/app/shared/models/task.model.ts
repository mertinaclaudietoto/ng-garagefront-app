import { Emp } from "./emp";
import { Service } from "./service.model";

export interface Task {
    _id?: string;
    service: Service;
    mechanic: Emp;
    prix: number;
    datedebut: Date;
    datefin: Date;
    is_finished: boolean;
}