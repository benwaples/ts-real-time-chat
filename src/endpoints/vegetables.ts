import { Router, Request, Response, NextFunction } from 'express';
import { Vegetables } from '../models/vegetables'

const vegetables = Router();



vegetables.get('/', async (req: Request, res: Response, next: NextFunction) => {
  Vegetables.findAll()
    .then((vegetables: Vegetables[] | null) => res.send(vegetables))
    .catch(next)
})

vegetables.post('/', async (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  Vegetables.insert(req.body)
    .then((vegetable: Vegetables | null) => res.send(vegetable))
    .catch(next)
})

export { vegetables }
