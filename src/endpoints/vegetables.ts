import { Router, Request, Response } from 'express';
import { Fruit, JsonData } from "../types";
import { Response as FetchResponse} from 'node-fetch';

const fetch = require('node-fetch')


const vegetables = Router();

const FDC_KEY = 'O3IfQiIhK9maV6b09F0zTcuUVLRFy5bIdSBoTuQd';

vegetables.get('/', (req: Request, res: Response) => {
  res.send('<h1>Vegetables</h1>')
})

vegetables.get('/:name', async(req: Request, res: Response) => {

  const json = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${FDC_KEY}&query=${req.params.name as string}`)
  .then((data: FetchResponse): Promise<Fruit> => (data.json() as Promise<Fruit>))

  res.send(json)
})

export { vegetables }
