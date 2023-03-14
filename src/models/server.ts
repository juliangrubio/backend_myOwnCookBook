import express from 'express';
import cors from 'cors';

import db from '../config/dbConnection';
import recipe from '../routes/recipe';

const app = express();

export const routes = () => {
  app.use('/api/recipes', recipe);
};

export const middlewares = () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.static('public'));
};

export const dbConnection = async () => {
  try {
    await db.authenticate();
    console.log('Database online');
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const listen = (PORT: number) => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
