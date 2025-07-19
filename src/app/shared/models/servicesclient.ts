
import { Emp } from "./emp";

import { IdName } from "./car-type";
export interface ServiceCostumer {
    _id: string|null;
    idcostumer: Emp|null;
    dateappoitement:Date;
    etats:number;
    serviceList:{
      idmechanic: Emp|null|undefined;
      service:{
        idservice:IdName,
        price:number,
        time:number,
        commission:number,
      }
      startdate: Date|null,
      enddate: Date|null,
      nbrstars: number,
      idcar: string|null,
      brandandmodel: string,
      picture: string,}[]
}
