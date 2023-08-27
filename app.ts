import express, { Express, Request, Response, urlencoded } from 'express';
import dotenv from 'dotenv';
import myWallet from './router/myWallet';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Response Comping from root url');
});
app.use("/myWallet",myWallet);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});