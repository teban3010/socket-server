import express, { Request, Response } from 'express';

import bodyParser from 'body-parser';
import cors from 'cors';
import errorMiddleware from './middleware/error.middleware';
import { init } from './socket';
import { sendMessage } from './controller';
import withErrorHandler from './exceptions/withErrorHandler';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post(
  '/sendMessage',
  withErrorHandler((req: Request, res: Response) => {
    sendMessage(req.body);

    res.status(200).send();
  })
);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'alive' });
});

app.use(errorMiddleware);

const server = app.listen(process.env.PORT || 3000);

const io = init(server);
io.on('connection', () => {
  console.log('Client connected');
  io.on('disconnect', () => console.log('Client disconnected'));
});
