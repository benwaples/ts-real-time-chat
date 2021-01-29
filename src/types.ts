export interface Fruit {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: Nutritions;
}
export interface Nutritions {
  carbohydrates: number;
  protein: number;
  fat: number;
  calories: number;
  sugar: number;
}

export interface JsonData {
  [key: string]: string | number | {};
  json(): any; 
}

export interface RowType {
  genus: string;
  name: string;
  id: number;
  family: string;
  order: string;
  nutritions: {
    carbohydrates: number;
    protein: number;
    fat: number;
    calories: number;
    sugar: number
  }
}