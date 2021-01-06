import express, { Request, Response } from 'express';
import Bundler from "parcel-bundler";
import path from "path";

const app = express();
const port = 8080 || process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send("hi")
})

const bundler = new Bundler(path.join(__dirname, "../src/client/index.html"));
app.use(bundler.middleware());

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`)
})