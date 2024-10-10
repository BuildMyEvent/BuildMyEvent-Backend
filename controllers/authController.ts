import { Request, Response } from 'express';
import AuthModel from '../models/authModel';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         lastname:
 *           type: string
 *         email:
 *           type: string
 *         wallet:
 *           type: string
 *         token:
 *           type: string
 */


/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication API
 */


export class AuthController {

   /**
   * @swagger
   * /auth/login:
   *   post:
   *     summary: Login User
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *                 example: jpvillaplana@gmail.com
   *               password:
   *                 type: string
   *                 example: password
   *     responses:
   *       200:
   *         description: Login success
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: Login Success
   *                 user:
   *                   $ref: '#/components/schemas/User'
   *       400:
   *         description: Error in the login
   */

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

   /**
   * @swagger
   * /auth/register:
   *   post:
   *     summary: Register a new user
   *     tags: [Auth]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *                 example: John
   *               lastname:
   *                 type: string
   *                 example: Doe
   *               email:
   *                 type: string
   *                 example: john.doe@example.com
   *               password:
   *                 type: string
   *                 example: password123
   *               wallet:
   *                 type: string
   *                 example: 0x1234567890abcdef
   *     responses:
   *       201:
   *         description: Registro exitoso
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: Register Success
   *                 user:
   *                   $ref: '#/components/schemas/User'
   *       400:
   *         description: Error in the registration
   */
    static async register(req: Request, res: Response){
        const { name, lastname, email, password, wallet } = req.body;

        try {
            const user = await AuthModel.register(name, lastname, email, password, wallet);
            res.status(201).json({ message: "Register Success", user });
        } catch (error) {
            res.status(400).json({ message: "User not created", error });
        }
    }
    

  /**
   * @swagger
   * /auth/logout:
   *   post:
   *     summary: Logout User
   *     tags: [Auth]
   *     responses:
   *       200:
   *         description: Logout success
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   example: Logout Success
   */
    static async logout(req: Request, res: Response){
        res.clearCookie('access_token');
        res.status(200).json({ message: "Logout Success" });
    }
}

export default AuthController;