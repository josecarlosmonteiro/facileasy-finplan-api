import { Request, Response } from "express";
import { CreateUserDTO } from "./user.dto";

export async function create(req: Request, res: Response) {
  try {
    const user: CreateUserDTO = req.body;
    res.json({ content: user });
  } catch (error: any) {
    res.json({ notification: error.message });
  }
}