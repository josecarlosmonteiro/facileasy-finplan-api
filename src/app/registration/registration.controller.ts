import { Request, Response } from "express";
import { RegistrationDTO } from "./dtos/registration.dto";
import { UserModel } from "../../models";
import { User } from "../../types/User";

export async function registration(req: Request, res: Response) {
  try {
    const { username, email, password }: RegistrationDTO = req.body;

    const previous = await UserModel.findOne({ where: { email } }) as unknown as User;

    if (previous) throw Error("Email indisponível no momento");

    const newUser = await UserModel.create({ username, email, password }) as unknown as User;

    return res.json({ content: newUser }).status(201);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}