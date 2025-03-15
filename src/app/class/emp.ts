import { IdName } from "./car-type";
export class Emp{
    _id:number|undefined;
    name:string;
    firstName:string;
    dateofbirth:Date;
    dateofemp:Date;
    rule:IdName;
    skills:IdName[];

    constructor(id: number|undefined, 
        name: string,firstName:string,
    dateofbirth:Date,dateofemp:Date,skills:IdName[],rule:IdName) {
        this._id = id;
        this.name = name;
        this.firstName=firstName;
        this.dateofbirth=dateofbirth;
        this.dateofemp=dateofemp;
        this.skills=skills;
        this.rule=rule;
    }
}

