export class Loginm{
    message:string;
    picture:string;
    token:string;
    iduser:string;
    idrule:string;
    constructor(idrule:string,iduser:string,message:string, picture: string,token:string) {
        this.message = message;
        this.picture = picture;
        this.token = token;
        this.iduser=iduser;
        this.idrule=idrule;
    }
}
