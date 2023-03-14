import { DataTypes } from 'sequelize';
import db from '../config/dbConnection';

const Recipe = db.define('Recipe', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  link: {
    type: DataTypes.STRING
  },
  title: {
    type: DataTypes.STRING
  },
  tags: {
    type: DataTypes.STRING
  },
  state: {
    type: DataTypes.BOOLEAN
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE
  }
});

export default Recipe;
