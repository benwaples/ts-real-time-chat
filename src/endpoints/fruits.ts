import { NextFunction, Request, Response } from "express";
import { Fruit, JsonData } from "../types";

const { Router } = require('express')
const fetch = require('node-fetch')

const fruits = Router();

fruits.get('/', async(req: Request, res: Response, next: NextFunction) => {
  const json = await fetch('https://fruityvice.com/api/fruit/all')
    .then((data: any) => data.json());
  res.send(json)
})

fruits.get('/:name', async(req: Request, res: Response, next: NextFunction) => {
  const name = req.params.name
  console.log(req.params.name)
  const json = await fetch(`https://fruityvice.com/api/fruit/${name}`)
    .then((data: JsonData): Fruit => data.json());
  
  res.send(json)
})

export { fruits }