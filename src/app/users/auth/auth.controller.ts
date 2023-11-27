import { Request, Response } from "express";
import { AuthDTO } from "./dtos/auth.dto";
import { UsersModel } from "../../../models";
import { User } from "../../../types/User";

export async function authenticate(req: Request, res: Response) {
  try {
    const { email, password }: AuthDTO = req.body;

    const user = await UsersModel.findOne({ where: { email } }) as unknown as User;

    if (!user) throw Error("Usuário não encontrado");
    if (user.password !== password) throw Error("Senha incorreta");

    return res.json({ token: 'valor de um token aqui' }).status(200);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}