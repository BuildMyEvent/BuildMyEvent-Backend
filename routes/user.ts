import { Router } from "express";
import { UserController } from "../controllers/usersController";

export const createUserRoutes = () => {
    const userRouter = Router();

    userRouter.get('/all', UserController.getAllUser);
    userRouter.get('/by-id/:id', UserController.getUserById);

    return userRouter;
}