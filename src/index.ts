
const express = require('express')
const bodyParser = require('body-parser')
const { vegetables } = require('./endpoints/vegetables')
const { fruits } = require('./endpoints/fruits')
// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import { vegetables } from './endpoints/vegetables';

const app = express();
const port = 8080 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/v1/vegetables', vegetables)
app.use('/api/v1/fruits', fruits)


module.exports = app;
// app.listen(port, () => {
//   console.log(`server is listening on port: ${port}`)
// })