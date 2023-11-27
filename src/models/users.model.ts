import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connectDB';
import { User } from '../types/User';

class UsersModel extends Model<User> implements User {
  public id!: number;
  public username?: string | undefined;
  public email!: string;
  public password!: string;
};

const { STRING, INTEGER } = DataTypes;

UsersModel.init({
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: STRING,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'users',
  tableName: 'users',
})

export default UsersModel;