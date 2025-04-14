import { DetServiceDetail } from "./det-service-detail.models";
export interface ServiceDetail {
    _id: string;
    idservice: DetServiceDetail;
    idmechanic: DetServiceDetail;
    prix: number;
    datedebut: Date;
    datefin: Date | null;
}
