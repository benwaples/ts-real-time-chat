export {}
const fs = require('fs');
const pool = require('../src/utils/pool')
const request = require('supertest')
const app = require('../src/index')

import Vegetables from '../src/models/vegetables'

describe('Test vegetables router', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))
  });

  
})