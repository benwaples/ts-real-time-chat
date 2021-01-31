import { RowType } from "../types";

export {};
const pool = require('../utils/pool.ts')

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
    this.id = Number(row.id)
    this.family = row.family
    this.order = row.order
    this.nutritions = row.nutritions
  }

  static async insert(vegetable: Vegetables): Promise<Vegetables | null> {
    const stringyNutrition = JSON.stringify(vegetable.nutritions);
    
    const { rows } = await pool.query(
      'INSERT INTO vegetables (genus, name, family, "order", nutritions) values ($1, $2, $3, $4, $5) RETURNING *',
      [vegetable.genus, vegetable.name, vegetable.family, vegetable.order, stringyNutrition]
    )

    if(!rows[0]) return null;

    return new Vegetables(rows[0])
  }

  static async findAll(): Promise<Vegetables[] | null> {
    
    const { rows } = await pool.query(
      'SELECT * FROM vegetables'
    )

    if(!rows) return null;

    return rows.map((row: Vegetables) => new Vegetables(row))
  }

  static async findById(id: number) {
    const { rows } = await pool.query(
      'SELECT * FROM vegetables WHERE id=$1',
      [id]
    )

    if(!rows[0]) return null;

    return new Vegetables(rows[0])
  }

  static async update(updatedVegetable: Vegetables): Promise<Vegetables | null> {
    const { rows } = await pool.query(`
      UPDATE vegetables
        SET genus=$1, 
            name=$2, 
            family=$3,
            "order"=$4, 
            nutritions=$5
        WHERE id=$6
        RETURNING *
    `,
      [updatedVegetable.genus, updatedVegetable.name, updatedVegetable.family, updatedVegetable.order, updatedVegetable.nutritions, updatedVegetable.id]
    )

    if(!rows[0]) return null;

    return new Vegetables(rows[0])
  }

  static async delete(id: number): Promise<Vegetables | null> {
    const { rows } = await pool.query(
      'DELETE FROM vegetables WHERE id=$1 RETURNING *',
      [id]
    )
    
    if(!rows[0]) return null;

    return new Vegetables(rows[0])

  }

}
