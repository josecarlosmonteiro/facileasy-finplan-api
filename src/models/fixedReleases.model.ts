import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connectDB';
import { Release } from '../types/Release';

class FixedReleasesModel extends Model<Release> implements Release {
  public id!: number;
  public title!: string;
  public value!: number;
  public type!: 'in' | 'out';
  public payday?: Date | undefined;
  public transferType?: string | undefined;
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
  payday: {
    type: DATE,
  },
  type: {
    type: ENUM,
    values: ['in', 'out'],
    allowNull: false,
  },
  transferType: {
    type: STRING,
  }
}, {
  sequelize,
  modelName: 'FixedReleases',
  tableName: 'fixed_releases',
})

export default FixedReleasesModel;