export interface ServiceDetail {
    _id: string;
    idservice: string;
    idmechanic: string;
    prix: number;
    datedebut: Date;
    datefin: Date | null;
  }