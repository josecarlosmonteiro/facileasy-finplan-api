import express from "express";
import userRouter from "./app/user/user.router";

const router = express.Router();

router.get('/', (_req, res) => {
  return res.json({ message: 'Router da aplicação funcionando!' });
});

router.use('/users', userRouter);

export default router;