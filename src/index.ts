import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './database/connection';

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ message: 'sucess' });
});

connectToDatabase();
app.listen(PORT, () => console.log('=>> Server on'));
