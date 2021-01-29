import { RowType } from "../types";

export {};
const { pool } = require('../utils/pool.ts')

export class Vegetables {
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
  
  constructor(row: RowType) {
    this.genus = row.genus
    this.name = row.name
    this.id = row.id
    this.family = row.family
    this.order = row.order
    this.nutritions = row.nutritions
  }

  static async insert(vegetable: Vegetables) {
    const stringyNutrition = JSON.stringify(vegetable.nutritions)

    const { rows } = await pool.query(
      'INSERT INTO vegetables (genus, name, family, order, nutritions) values ($1, $2, $3, $4, $5) RETURNING *',
      [vegetable.genus, vegetable.name, vegetable.family, vegetable.order, stringyNutrition]
    )

    if(!rows[0]) return null;

    return new Vegetables(rows[0])
  }

}

const example = {
  "genus": "Malus",
  "name": "Apple",
  "id": 6,
  "family": "Rosaceae",
  "order": "Rosales",
  "nutritions": {
      "carbohydrates": 11.4,
      "protein": 0.3,
      "fat": 0.4,
      "calories": 52,
      "sugar": 10.3
  }