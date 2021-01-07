import { Response } from "express";
const fetch = require('node-fetch')

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

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
})

fetch('https://fruityvice.com/api/fruit/all')
  .then((res: any) => res.json())
  .then(console.log)