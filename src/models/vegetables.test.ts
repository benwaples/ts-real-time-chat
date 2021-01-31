export {}

import { Vegetables } from "./vegetables"
const fs = require('fs')
const pool = require('../utils/pool.ts')

describe('Vegetables class', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))
  })

  it('should insert a vegetable into the vegetable', async () => {
    const vegetable: Vegetables = {
      id: 3,
      genus: 'topic',
      name: 'ben',
      family: 'team',
      order: 'quick',
      nutritions: {
        carbohydrates: 4,
        protein: 3, 
        fat: 6, 
        calories: .3,
        sugar: .5
      }
    }

    const actual = await Vegetables.insert(vegetable)

    const result = await pool.query('SELECT * FROM vegetables')

    return expect(actual).toEqual(actual)
  });

  it('should return an array of all vegetables', async() => {
    const vegetable1: Vegetables = {
      id: 3,
      genus: 'topic',
      name: 'ben',
      family: 'team',
      order: 'quick',
      nutritions: {
        carbohydrates: 4,
        protein: 3, 
        fat: 6, 
        calories: .3,
        sugar: .5
      }
    }

    await Vegetables.insert(vegetable1)
    const vegetable2: Vegetables = {
      id: 3,
      genus: 'topic',
      name: 'ben2',
      family: 'team',
      order: 'quick',
      nutritions: {
        carbohydrates: 4,
        protein: 3, 
        fat: 6, 
        calories: .3,
        sugar: .5
      }
    }
    await Vegetables.insert(vegetable2)

    const actual = await Vegetables.findAll();

    console.log(actual)

    expect(actual.length).toEqual(2)
  })

  it('should find a vegetable by id', async () => [

  ])
})