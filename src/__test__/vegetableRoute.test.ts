export {}
const fs = require('fs');
const pool = require('../utils/pool')
const request = require('supertest')
const app = require('../index')

import { Request } from 'express'
import { insertVegetable, vegetable1, vegetable2 } from '../helper';
import { Vegetables } from '../models/vegetables'

describe('Test vegetables router', () => {
  beforeEach(async () => {
    await pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))

    await Vegetables.insert(vegetable1)
    
    return await Vegetables.insert(vegetable2)
  });

  it('should return all vegetables in the database', () => {
    return request(app)
      .get('/api/v1/vegetables')
      .then((res: Request) => expect(res.body.length).toEqual(2))
  })

  it('the first vegetables should match the data structure', () => {
    return request(app)
      .get('/api/v1/vegetables')
      .then((res: Request) => expect(res.body[0]).toMatchObject(vegetable1))
  })

  it('should insert a vegetable via GET', () =>  {
    return request(app)
      .post('/api/v1/vegetables')
      .send(insertVegetable)
      .then((res: Request) => expect(res.body).toEqual(insertVegetable))
  })

})