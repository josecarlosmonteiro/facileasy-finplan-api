import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connectDB';
import { VariableRelease } from '../types/Release';

class VariableReleasesModel extends Model<VariableRelease> implements VariableRelease {
  id!: number;
  month!: string;
  year!: number;
}

const { STRING, INTEGER } = DataTypes;

VariableReleasesModel.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  month: {
    type: STRING,
    allowNull: false,
  },
  year: {
    type: INTEGER,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'variable_releases',
  tableName: 'variable_releases'
})

export default VariableReleasesModel;