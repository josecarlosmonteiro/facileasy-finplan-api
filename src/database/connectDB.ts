import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dialect = 'mysql';
const host = process.env.HOST;
const database = process.env.DATABASE!;
const username = process.env.USER!;
const password = process.env.PASS!;

export const sequelize = new Sequelize(database, username, password, {
  dialect,
  host,
  logging: () => false,
});

export async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com banco de dados estabilizada');
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados");
    console.error(error);
  }
}