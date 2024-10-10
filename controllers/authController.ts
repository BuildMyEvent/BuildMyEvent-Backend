import { Request, Response } from 'express';
import AuthModel from '../models/authModel';

export class AuthController {

    static async login(req: Request, res: Response){
        const { email, password } = req.body;

        try {
            const user = await AuthModel.login(email, password);
            res
            .cookie('access_token', user.token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'none'
            })
            .status(200).json({ message: "Login Success", user });
        } catch (error) {
            res.status(400).json({ message: "Login failed", error });
        }
    }

    static async register(req: Request, res: Response){
        const { name, lastname, email, password, wallet } = req.body;

        try {
            const user = await AuthModel.register(name, lastname, email, password, wallet);
            res.status(201).json({ message: "Register Success", user });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "User not created", error });
        }
    }
    
    static async logout(req: Request, res: Response){
        res.clearCookie('access_token');
        res.status(200).json({ message: "Logout Success" });
    }
}

export default AuthController;