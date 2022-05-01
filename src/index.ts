import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectToDatabase from './models/connection';

dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'É sobre isso' });
});

connectToDatabase();
app.listen(PORT, () => console.log('=>> Server on'));
