//

export var Users = [
  {
    carBrand: "Mecerdes-Benz",
    type :"SUV",
    model: "G63",
    name: "Sithembiso",
    color: "Black",
    cellnumber: "0720989916",
    numberplate : "NoDegree GP"
  },
  {
    carBrand: "Audi",
    type :"Hatchback",
    model: "Rs3",
    name: "Nhlanhla",
    color: "Grey",
    cellnumber: "0683587691",
    numberplate : "MB 24 WX GP"
  }


];

export interface Users {
  name: string;
  carType: string;
  carBrand: string;
  model: string;
  color: string;
  cellnumber: string;
  numberPlate: string;
}

// Optional: create an array to hold users (if needed)
export const usersList: Users[] = []