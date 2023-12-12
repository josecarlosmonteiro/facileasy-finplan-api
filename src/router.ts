import express from "express";
import userRouter from "./app/users/profile/user.router";
import authRouter from "./app/users/auth/auth.router";
import registrationRouter from "./app/users/registration/registration.router";
import categoriesRouter from "./app/categories/categories.router";

const router = express.Router();

router.get('/', (_req, res) => {
  return res.json({ message: 'Router da aplicação funcionando!' });
});

// USERS
router.use('/authentication', authRouter);
router.use('/registration', registrationRouter);
router.use('/profile', userRouter);

//CATEGORIES
router.use('/categories', categoriesRouter);

export default router;