import express, { Request, Response } from 'express';

const PORT = 3001;

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'sucess' });
});

app.listen(PORT, () => console.log('=>> Server on'));
