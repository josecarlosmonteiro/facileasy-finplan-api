import express, { Router } from 'express';
import { create, remove } from './user.controller';

const userRouter = express.Router();

userRouter.post('/', (req, res) => create(req, res));
userRouter.delete('/:id', (req, res) => remove(req, res));

export default userRouter;