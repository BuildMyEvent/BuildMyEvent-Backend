import { Request, Response } from 'express';
import UserModel from "../models/userModel";


export class UserController {

    static async getAllUser(req: Request, res: Response) {
        try {
            const users = await UserModel.getAllUsers();
            res.status(200).json({ message: "Users", users });
        } catch (error) {
            res.status(400).json({ message: "Users not found", error });
        }
    }


    static async getUserById(req: Request, res: Response) {
        const user_id = parseInt(req.params.id);

        try {
            const user = await UserModel.getUserById(user_id);
            res.status(200).json({ message: "User", user });
        } catch (error) {
            res.status(400).json({ message: "User not found", error });
        }
    }

    static async createUser(req: Request, res: Response) {
        const { name, lastname, email, password, wallet } = req.body;

        try {
            const user = await UserModel.create(name, lastname, email, password, wallet);
            res.status(201).json({ message: "User created", user });
        } catch (error) {
            res.status(400).json({ message: "User not created", error });
        }
    }

    static async updateUser(req: Request, res: Response) {
        const user_id = parseInt(req.params.id);

        try {
            const user = await UserModel.update(user_id, req.body);
            res.status(200).json({ message: "User updated", user });
        } catch (error) {
            res.status(400).json({ message: "User not updated", error });
        }
    }
}
