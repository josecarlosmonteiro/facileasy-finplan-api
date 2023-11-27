import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connectDB';
import { Release } from '../types/Release';

class FixedReleasesModel extends Model<Release> implements Release {
  public id!: number;
  public title!: string;
  public value!: number;
  public type!: 'in' | 'out';
  public payday?: Date | undefined;
  public status!: 'pago' | 'pendente' | 'cancelado';
}

const { INTEGER, STRING, FLOAT, ENUM, DATE } = DataTypes;

FixedReleasesModel.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: STRING,
    allowNull: false,
  },
  value: {
    type: FLOAT,
    allowNull: false,
  },
  type: {
    type: ENUM,
    values: ['in', 'out'],
    allowNull: false,
  },
  payday: {
    type: DATE,
  },
  status: {
    type: ENUM,
    values: ['pago', 'pendente', 'cancelado'],
  },
}, {
  sequelize,
  modelName: 'FixedReleases',
  tableName: 'fixed_releases',
})

export default FixedReleasesModel;