import { IdName } from "./car-type";

export const CARTYPE: { [key: string]: IdName[] } = {
  cartypes: [
    { "id": 1, "name": "Berline" },
    { "id": 2, "name": "Break" },
    { "id": 3, "name": "Coupé" },
    { "id": 4, "name": "Cabriolet" },
    { "id": 5, "name": "Hatchback" },
    { "id": 6, "name": "Roadster" },
    { "id": 7, "name": "Limousine" },
    { "id": 8, "name": "SUV" },
    { "id": 9, "name": "Crossover" },
    { "id": 10, "name": "4x4" },
    { "id": 11, "name": "Pick-up" },
    { "id": 12, "name": "Monospace" },
    { "id": 13, "name": "Van" },
    { "id": 14, "name": "Minibus" },
    { "id": 15, "name": "Camionnette" },
    { "id": 16, "name": "Camion" },
    { "id": 17, "name": "Fourgon" }
  ],
  enginetypes: [
    { "id": 1, "name": "Essence" },
    { "id": 2, "name": "Diesel" },
    { "id": 3, "name": "Hybride Série" },
    { "id": 4, "name": "Hybride Parallèle" },
    { "id": 5, "name": "Hybride Plug-in" },
    { "id": 6, "name": "Électrique CC" },
    { "id": 7, "name": "Électrique Synchrone" },
    { "id": 8, "name": "Électrique Asynchrone" },
    { "id": 9, "name": "Hydrogène" },
    { "id": 10, "name": "Rotatif" },
    { "id": 11, "name": "Gaz Naturel" },
    { "id": 12, "name": "Biocarburant" }
  ],
  sizetypes: [
    { "id": 1, "name": "Petite" },
    { "id": 2, "name": "Moyenne" },
    { "id": 3, "name": "Grande" }
  ],
  weighttypes:[
    { "id": 1, "name": "Légère" },
    { "id": 2, "name": "Moyenne" },
    { "id": 3, "name": "Lourde" }
  ]
};
