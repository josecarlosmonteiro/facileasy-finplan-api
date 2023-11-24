import UserModel from "./users.model";
import { sequelize } from "../database/connectDB";

sequelize.sync({ force: true })
  .then(() => {
    console.log("Tabelas criadas com sucesso");
  })
  .catch(err => {
    console.log("Erro ao criar tabelas");
    console.log(err);
  });

export {
  UserModel,
}