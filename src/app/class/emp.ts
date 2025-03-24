import { IdName } from "./car-type";
export class Emp{
    _id:string|undefined;
    picture:string;
    name:string;
    firstName:string;
    dateofbirth:Date;
    dateofemp:Date;
    login:string;
    password:string;
    rule:IdName;
    sex:IdName;
    skills:IdName[];

    constructor(
        picture: string = "default.jpg",
        id: string | undefined = undefined, 
        name: string = "John",
        firstName: string = "Doe",
        dateofbirth: Date = new Date("2000-01-01"),
        dateofemp: Date = new Date(),
        skills: IdName[] = [],
        login:string ="",
        password:string="",
        rule: IdName = { _id: 0, name: "Employee" } ,
        sex: IdName = { _id: 0, name: "Employee" } ) {
        this._id = id;
        this.login=login;
        this.password=password;
        this.picture = picture;
        this.name = name;
        this.firstName = firstName;
        this.dateofbirth = dateofbirth;
        this.dateofemp = dateofemp;
        this.skills = skills;
        this.rule = rule;
        this.sex = sex;
    }
}

