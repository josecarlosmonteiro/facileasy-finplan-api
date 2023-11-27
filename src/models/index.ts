import { sequelize } from "../database/connectDB";

import UserModel from "./users.model";
import FixedReleasesModel from "./fixedReleases.model";
import CategoriesModel from "./categories.model";

UserModel.hasMany(FixedReleasesModel, { onDelete: 'cascade' });
FixedReleasesModel.belongsTo(UserModel, { onDelete: 'cascade' });

CategoriesModel.hasMany(FixedReleasesModel, { onDelete: 'cascade' });
FixedReleasesModel.belongsTo(CategoriesModel, { onDelete: 'cascade' });

export function syncDatabase() {
  sequelize.sync({ force: true })
    .then(() => {
      console.log("Tabelas criadas com sucesso");
    })
    .catch(err => {
      console.log("Erro ao criar tabelas");
      console.log(err);
    });
}

export {
  UserModel,
  FixedReleasesModel,
  CategoriesModel,
}