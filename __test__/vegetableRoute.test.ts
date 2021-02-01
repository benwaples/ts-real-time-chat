export {}
const fs = require('fs');
const pool = require('../src/utils/pool')
const request = require('supertest')
const app = require('../src/index')

import { vegetable1, vegetable2 } from '../src/helper';
import { Vegetables } from '../src/models/vegetables'

describe('Test vegetables router', () => {
  beforeEach(async () => {
    await pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))

    await Vegetables.insert(vegetable1)
    
    return await Vegetables.insert(vegetable2)
  });

  it('should return all vegetables in the database', () => {

  })
})