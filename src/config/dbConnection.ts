import { Sequelize } from 'sequelize';

const db = new Sequelize('myOwnChefBook', 'root', 'sqlServer123456;', {
  host: 'localhost',
  dialect: 'mysql'
});

export default db;
