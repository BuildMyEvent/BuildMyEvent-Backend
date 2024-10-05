import { Router } from "express";


export const createAuthRoutes = () => {
    const authRouter = Router();

    authRouter.get('/login', (req, res) => {
        res.send('Login Route');
    });

    authRouter.get('/logout', (req, res) => {
        res.send('Logout Route');
    });

    authRouter.get('/register', (req, res) => {
        res.send('Register Route');
    });

    return authRouter;
}