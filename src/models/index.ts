import { sequelize } from "../database/connectDB";

import UsersModel from "./users.model";
import CategoriesModel from "./categories.model";
import FixedReleasesModel from "./fixedReleases.model";
import VariableReleasesModel from "./variableReleases.model";

// USERS <1:N> FIXED_RELEASES
UsersModel.hasMany(FixedReleasesModel, { onDelete: 'cascade' });
FixedReleasesModel.belongsTo(UsersModel, { onDelete: 'cascade' });

// CATEGORIES <1:N> FIXED_RELEASES
CategoriesModel.hasMany(FixedReleasesModel, { onDelete: 'cascade' });
FixedReleasesModel.belongsTo(CategoriesModel, { onDelete: 'cascade' });

// USERS <1:N> VARIABLE_RELEASES
UsersModel.hasMany(VariableReleasesModel, { onDelete: 'cascade' });
VariableReleasesModel.belongsTo(UsersModel, { onDelete: 'cascade' });

// CATEGORIES <N:M> VARIABLE_RELEASES
VariableReleasesModel.belongsToMany(CategoriesModel, {
  through: 'categories_has_variable_releases',
  onDelete: 'cascade'
});
CategoriesModel.belongsToMany(VariableReleasesModel, {
  through: 'categories_has_variable_releases',
  onDelete: 'cascade'
});

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