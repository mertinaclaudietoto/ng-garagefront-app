import { IdName } from './car-type'; // Assurez-vous que `CarType` est exporté dans ce fichier

export class Car {
    _id: '';
    picture: string;
    brand: string;
    model: string;
    version: number;
    datesortie: string;
    empathement: string;
    carType: IdName;  
    engineType: IdName; 
    sizeType: IdName; 
    weigthType: IdName; 

    constructor(
        _id: any = undefined,
        image: string = '',
        brand: string = '',
        model: string = '',
        version: number = 1,
        datesortie: string = '',
        empathement: string = '',
        carType: IdName = { _id: 0, name: '' },  // Valeurs par défaut pour IdName
        engineType: IdName = { _id: 0, name: '' },
        sizeType: IdName = { _id: 0, name: '' },
        weigthType: IdName = { _id: 0, name: '' }
    ) {
        this._id = _id;
        this.picture = image;
        this.brand = brand;
        this.model = model;
        this.version = version;
        this.datesortie = datesortie;
        this.empathement = empathement;
        this.carType = carType;
        this.engineType = engineType;
        this.sizeType = sizeType;
        this.weigthType = weigthType;
    }
}
