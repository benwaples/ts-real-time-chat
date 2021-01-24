import { NextFunction, Request, Response } from "express";
import { Response as FetchResponse } from "node-fetch";
import { Fruit, JsonData } from "../types";

const { Router } = require('express')
const fetch = require('node-fetch')

const fruits = Router();

fruits.get('/', async(req: Request, res: Response, next: NextFunction) => {
  const json = await fetch('https://fruityvice.com/api/fruit/all')
    .then((data: JsonData) => data.json());
  res.send(json)
})

fruits.get('/:name', async(req: Request, res: Response, next: NextFunction) => {
  const name = req.params.name
  
  const json = await fetch(`https://fruityvice.com/api/fruit/${name}`)
    .then((data: FetchResponse): Promise<Fruit> => (data.json() as Promise<Fruit>));
  
  res.send(json)
})

export { fruits }