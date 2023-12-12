import { CategoriesModel } from "../../../models";
import { CreateCategoryDTO } from "../dtos/categories.dto";

export class CategoryEntity {
  public async create(newCat: CreateCategoryDTO): Promise<CategoriesModel | null> {
    try {
      const data = await CategoriesModel.create(newCat);
      return data || null;
    } catch (error) {
      return null;
    }
  }
}