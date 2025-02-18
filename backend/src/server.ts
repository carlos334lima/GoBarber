import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';

import cors from 'cors';

import 'express-async-errors';
import routes from './routes';

import './database/index';
import uploadConfig from './config/upload';
import AppError from './errors/AppErros';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => console.log('Backend Stated! 🔥'));
