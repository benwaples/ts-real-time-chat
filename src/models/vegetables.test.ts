export {}

import { updatedVegetable, vegetable, vegetable1, vegetable2 } from "../helper"
import { Vegetables } from "./vegetables"
const fs = require('fs')
const pool = require('../utils/pool.ts')

describe('Vegetables class', () => {
  beforeEach(async () => {

    await pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))

    await Vegetables.insert(vegetable1)
    
    return await Vegetables.insert(vegetable2)
  })

  it('should insert a vegetable into the vegetable', async () => {
    

    const actual = await Vegetables.insert(vegetable)

    const { rows } = await pool.query('SELECT * FROM vegetables where id=$1', [vegetable.id])

    return expect(actual).toEqual(new Vegetables(rows[0]))
  });

  it('should return an array of all vegetables', async() => {
    
    const actual = await Vegetables.findAll(); 

    expect(actual.length).toEqual(2)
  })

  it('should find a vegetable by id', async () => {
    
    const actual = await Vegetables.findById(2)

    expect(actual).toEqual(vegetable2)

  })

  it('should update a vegetable when given the id and updated info about the vegetable', async () => {

    const actual = await Vegetables.update(updatedVegetable)

    expect(actual).toEqual(updatedVegetable)

  })
})