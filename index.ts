import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import Routes from './src/routes';
import db from './src/config/dbConnection';

const app = express();

dotenv.config();
const PORT = Number(process.env.PORT) || 4001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api', Routes);

// DB
(async () => {
  try {
    await db.authenticate();
    console.log('Database online');
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
})();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
