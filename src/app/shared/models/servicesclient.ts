import { CarClient } from "./car-client";
import { Emp } from "./emp";
import { ServiceDetail } from "./det-serviceclient";
export interface ServiceClient {
    _id: string;
    idcustomer: Emp;
    idcarcustomer: CarClient;
    datedebut: Date;
    datedemande: Date;
    datefin: Date | null;
    payed: boolean;
    detail: ServiceDetail[];
    __v: number;
    createdAt: Date;
    updatedAt: Date;
  }