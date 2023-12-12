import { Request, Response } from "express";
import { FixedReleasesModel } from "../../../models";
import { CreateFixedReleaseDTO } from "./dtos/fixedReleases.dto";

export async function findAll(req: Request, res: Response) {
  try {
    const { userId } = req.headers;

    return res.json({ content: userId }).status(200);
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const { title, value, payday, transferType, type }: CreateFixedReleaseDTO = req.body;
    const data = await FixedReleasesModel.create({});
  } catch (error: any) {
    return res.json({ notification: error.message }).status(500);
  }
}