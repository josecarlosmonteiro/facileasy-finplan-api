import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connectDB';
import { Category } from '../types/Category';

class CategoriesModel extends Model<Category> implements Category {
  public id!: number;
  public name!: string;
}

const { INTEGER, STRING } = DataTypes;

CategoriesModel.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'categories',
  tableName: 'categories',
});

export default CategoriesModel;