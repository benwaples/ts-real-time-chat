import { Router, Request, Response, NextFunction } from 'express';
import { Vegetables } from '../models/vegetables'

const vegetables = Router();

vegetables.get('/', async (req: Request, res: Response, next: NextFunction) => {
  Vegetables.findAll()
    .then((vegetables: Vegetables[] | null) => res.send(vegetables))

})

export { vegetables }
