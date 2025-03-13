import { IdName } from './car-type'; // Assurez-vous que `CarType` est exporté dans ce fichier

export class Car {
    _id: number;
    image: string;
    brand: string;
    model: string;
    version: number;
    datesortie: string;
    empathement: string;
    carType: IdName;  
    engineType: IdName; 
    sizeType: IdName; 
    weightType: IdName; 

    constructor(
        _id: number,
        image: string,
        brand: string,
        model: string,
        version: number,
        datesortie: string,
        empathement: string,
        carType: IdName,
        engineType: IdName,
        sizeType: IdName,
        weightType: IdName
    ) {
        this._id = _id;
        this.image = image;
        this.brand = brand;
        this.model = model;
        this.version = version;
        this.datesortie = datesortie;
        this.empathement = empathement;
        this.carType = carType;
        this.engineType = engineType;
        this.sizeType = sizeType;
        this.weightType = weightType;
    }
}
