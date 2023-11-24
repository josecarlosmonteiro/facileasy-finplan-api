import { Request, Response } from "express";
import { UserModel } from "../../models";
import { CreateUserDTO } from "./user.dto";

export async function create(req: Request, res: Response) {
  try {
    const { username, email, password }: CreateUserDTO = req.body;
    const data = await UserModel.create({ username, email, password });

    return res.json({ content: data }).status(201);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await UserModel.findOne({ where: { id: Number(id) } });

    await user?.destroy();

    return res.status(204);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}