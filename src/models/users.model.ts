import { DataTypes } from 'sequelize';
import { sequelize } from '../database/connectDB';

const UserModel = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: true,
});

export default UserModel;