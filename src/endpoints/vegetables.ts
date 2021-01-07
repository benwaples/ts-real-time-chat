import { Router, Request, Response } from 'express';

const vegetables = Router();

vegetables.get('/', (req: Request, res: Response) => {
  res.send('<h1>Vegetables</h1>')
})

export { vegetables }
