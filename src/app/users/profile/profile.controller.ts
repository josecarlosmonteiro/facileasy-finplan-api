import { Request, Response } from "express";
import { UsersModel } from "../../../models";
import { User } from "../../../types/User";

export async function findOne(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await UsersModel.findOne({ where: { id: Number(id) } }) as unknown as User;

    return res.json({ content: user }).status(204);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}