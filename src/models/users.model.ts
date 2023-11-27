import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connectDB';
import { User } from '../types/User';
class UsersModel extends Model<Omit<User, 'id'>> implements Omit<User, 'id'> {
  public username?: string | undefined;
  public email!: string;
  public password!: string;
};

const { STRING } = DataTypes;

UsersModel.init({
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