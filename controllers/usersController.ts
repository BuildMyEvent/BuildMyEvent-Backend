import { Request, Response } from 'express';
import UserModel from "../models/userModel";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         lastname:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         wallet:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: User
 *   description: API for managing users
 */


export class UserController {
    
    /**
     * @swagger
     * /users:
     *   get:
     *     tags: [User]
     *     summary: Get All Users
     *     description: Retrieves all users from the database.
     *     responses:
     *       200:
     *         description: Users retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 users:
     *                   type: array
     *                   items:
     *                     $ref: '#/components/schemas/User'
     *       400:
     *         description: Users not found
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 error:
     *                   type: object
     */
    static async getAllUser(req: Request, res: Response) {
        try {
            const users = await UserModel.getAllUsers();
            res.status(200).json({ message: "Users", users });
        } catch (error) {
            res.status(400).json({ message: "Users not found", error });
        }
    }

    /**
     * @swagger
     * /users/by-id/{id}:
     *   get:
     *     tags: [User]
     *     summary: Get User by ID
     *     description: Retrieves a user by their ID.
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         description: The ID of the user to retrieve.
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: User retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 user:
     *                   $ref: '#/components/schemas/User'
     *       400:
     *         description: User not found
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 error:
     *                   type: object
     */
    static async getUserById(req: Request, res: Response) {
        const user_id = parseInt(req.params.id);

        try {
            const user = await UserModel.getUserById(user_id);
            res.status(200).json({ message: "User", user });
        } catch (error) {
            res.status(400).json({ message: "User not found", error });
        }
    }

    /**
     * @swagger
     * /users:
     *   post:
     *     tags: [User]
     *     summary: Create User
     *     description: Creates a new user.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       201:
     *         description: User created successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 user:
     *                   $ref: '#/components/schemas/User'
     *       400:
     *         description: User not created
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 error:
     *                   type: object
     */
    static async createUser(req: Request, res: Response) {
        const { name, lastname, email, password, wallet } = req.body;

        try {
            const user = await UserModel.create(name, lastname, email, password, wallet);
            res.status(201).json({ message: "User created", user });
        } catch (error) {
            res.status(400).json({ message: "User not created", error });
        }
    }

    /**
     * @swagger
     * /users/{id}:
     *   put:
     *     tags: [User]
     *     summary: Update User
     *     description: Updates an existing user by their ID.
     *     parameters:
     *       - name: id
     *         in: path
     *         required: true
     *         description: The ID of the user to update.
     *         schema:
     *           type: integer
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: User updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 user:
     *                   $ref: '#/components/schemas/User'
     *       400:
     *         description: User not updated
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 error:
     *                   type: object
     */
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
