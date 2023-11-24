import express from "express";
import userRouter from "./app/profile/user.router";
import authRouter from "./app/auth/auth.router";
import registrationRouter from "./app/registration/registration.router";


const router = express.Router();

router.get('/', (_req, res) => {
  return res.json({ message: 'Router da aplicação funcionando!' });
});

router.use('/authentication', authRouter);
router.use('/registration', registrationRouter);
router.use('/profile', userRouter);

export default router;