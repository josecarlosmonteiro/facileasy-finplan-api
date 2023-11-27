import { Request, Response } from 'express';
import { CategoriesModel } from '../../models';
import { CreateCategoryDTO } from './dtos/categories.dto';

export async function findAll(_req: Request, res: Response) {
  try {
    const data = await CategoriesModel.findAll();

    return res.json({ content: data }).status(200);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}

export async function findOne(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = await CategoriesModel.findByPk(id);

    return res.json({ content: data }).status(200);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const { name, type }: CreateCategoryDTO = req.body;

    const data = await CategoriesModel.create({ name, type });

    return res.json({ content: data }).status(200);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const category = await CategoriesModel.findByPk(id);
    await category?.destroy();

    return res.status(204);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}