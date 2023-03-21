import { DataTypes } from 'sequelize';
import db from '../config/dbConnection';

const Recipe = db.define('Recipe', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  preparation: {
    type: DataTypes.TEXT
  },
  category: {
    // type: DataTypes.STRING
    type: DataTypes.ARRAY( DataTypes.STRING( 100 ) )
  },
  tags: {
    type: DataTypes.STRING
  },
  isFromTheMealDB: {
    type: DataTypes.BOOLEAN
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
