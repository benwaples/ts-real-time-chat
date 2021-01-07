const express = require('express')
const bodyParser = require('body-parser')
const { vegetables } = require('./endpoints/vegetables')
// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import { vegetables } from './endpoints/vegetables';

const app = express();
const port = 8080 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/v1/vegetables', vegetables)

app.get('/', (req: Request, res) => {
  console.log('you did it')
  res.send("<h1>Hello World</h1>")
})

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
})
