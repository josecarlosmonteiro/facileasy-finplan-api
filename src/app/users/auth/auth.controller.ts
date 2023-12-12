import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

import { AuthDTO } from "./dtos/auth.dto";
import { UsersModel } from "../../../models";
import { User } from "../../../types/User";

config();

export async function authenticate(req: Request, res: Response) {
  try {
    const { email, password }: AuthDTO = req.body;

    const user = await UsersModel.findOne({ where: { email } }) as unknown as User;

    if (!user) throw Error("Usuário não encontrado");
    if (user.password !== password) throw Error("Senha incorreta");

    const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY!);

    return res.json({ token }).status(200);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}