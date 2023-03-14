import dotenv from 'dotenv';
import { dbConnection, listen, middlewares, routes } from './src/models/server';

dotenv.config();
const PORT = Number(process.env.PORT) || 4001;

routes();
middlewares();
dbConnection();

listen(PORT);
