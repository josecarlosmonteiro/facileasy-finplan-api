import { sequelize } from "../database/connectDB";

import UsersModel from "./users.model";
import CategoriesModel from "./categories.model";
import FixedReleasesModel from "./fixedReleases.model";
import VariableReleasesModel from "./variableReleases.model";

// USERS <1:N> FIXED_RELEASES
UsersModel.hasMany(FixedReleasesModel, { onDelete: 'cascade' });

// CATEGORIES <1:N> FIXED_RELEASES
CategoriesModel.hasMany(FixedReleasesModel, { onDelete: 'cascade' });

// USERS <1:N> VARIABLE_RELEASES
UsersModel.hasMany(VariableReleasesModel, { onDelete: 'cascade' });

// CATEGORIES <1:N> VARIABLE_RELEASES
CategoriesModel.hasMany(VariableReleasesModel, { onDelete: 'cascade' });

// TODO: criar model de lançamento variável mensal diferente de lançamento variável;
// TODO: relacionar meses de lançamentos variáveis com os lançamentos em si;


export function syncDatabase() {
  sequelize.sync({ force: true })
    .then(() => {
      console.log("Tabelas (re)criadas com sucesso");
    })
    .catch(err => {
      console.log("Erro ao (re)criar tabelas");
      console.log(err);
    });
}

export {
  UsersModel,
  CategoriesModel,
  FixedReleasesModel,
  VariableReleasesModel,
}