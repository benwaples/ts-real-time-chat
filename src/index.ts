import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8080 || process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  console.log('you did it')
  res.send("<h1>Hello World</h1>")
})

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
})
