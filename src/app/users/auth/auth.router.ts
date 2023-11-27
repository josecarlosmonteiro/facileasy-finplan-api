import express from 'express';
import { authenticate } from './auth.controller';

const authRouter = express.Router();

authRouter.post('/', (req, res) => authenticate(req, res));

export default authRouter;