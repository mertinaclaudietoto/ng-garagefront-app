export class Car {
    id: number;
    image: string;
    marque: string;
    model: string;
    typecar: string;
    version: number;
    datesortie: string;
    enginetype: string;
    taille: string;
    poids: string;
    empathement: number;

    constructor(id: number, image: string, marque: string, model: string, 
                typecar: string, version: number, datesortie: string, enginetype: string, 
                taille: string, poids: string, empathement: number) {
        this.id = id;
        this.image = image;
        this.marque = marque;
        this.model = model;
        this.typecar = typecar;
        this.version = version;
        this.datesortie = datesortie;
        this.enginetype = enginetype;
        this.taille = taille;
        this.poids = poids;
        this.empathement = empathement;
    }
}


