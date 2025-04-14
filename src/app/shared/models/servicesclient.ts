
import { Emp } from "./emp";

import { IdName } from "./car-type";
export interface ServiceCostumer {
    _id: string;
    idcostumer: Emp;
    dateappoitement:Date;
    etats:number;
    serviceList:{idmechanic: Emp;
      service:{
        idservice:IdName,
        price:number,
        time:number,
        commission:number,
      }
      startdate: Date,
      enddate: Date,
      nbrstars: number,
      idcar: string,
      brandandmodel: string,
      picture: string,}[]
}
