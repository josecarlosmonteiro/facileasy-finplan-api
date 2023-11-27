import express from 'express';
import { registration } from './registration.controller';

const registrationRouter = express.Router();

registrationRouter.post('/', (req, res) => registration(req, res));

export default registrationRouter;