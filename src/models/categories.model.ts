import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connectDB';
import { Category } from '../types/Category';

class CategoriesModel extends Model<Omit<Category, 'id'>> implements Omit<Category, 'id'> {
  // public id!: number;
  public name!: string;
  public type!: 'in' | 'out';
}

const { STRING, ENUM } = DataTypes;

CategoriesModel.init({
  name: {
    type: STRING,
    allowNull: false,
  },
  type: {
    type: ENUM,
    values: ['in', 'out'],
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'categories',
  tableName: 'categories',
});

export default CategoriesModel;