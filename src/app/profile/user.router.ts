import express from 'express';
import { findOne } from './profile.controller';

const userRouter = express.Router();

userRouter.get('/:id', (req, res) => findOne(req, res));

export default userRouter;