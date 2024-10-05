import { Router } from "express";

export const createUserRoutes = () => {
    const userRouter = Router();

    userRouter.get('/', (req, res) => {
        res.send('Hello World from User');
    });

    return userRouter;
}