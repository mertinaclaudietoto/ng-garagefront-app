import { IdName } from './car-type'; 
import { Emp } from './emp';
export class CarClient {
    _id: string;
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
    costumer:Emp;
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
        weigthType: IdName = { _id: 0, name: '' },
        costumer:Emp=new Emp()
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
        this.costumer=costumer;
    }
}