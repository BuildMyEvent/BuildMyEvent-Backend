
import { Request, Response } from 'express';
import WLCEventModel from '../models/wlcModel';


/**
 * @swagger
 * components:
 *   schemas:
 *     Config:
 *       type: object
 *       properties:
 *         domain:
 *           type: string
 *         eventId:
 *           type: integer
 *         config_key:
 *           type: string
 *         config_value:
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Config
 *   description: API for managing configuration settings
 */

export class configController{  
    
    /**
     * @swagger
     * /config/by-domain?domain={domain}:
     *   get:
     *     tags: [Config]
     *     summary: Get Config Settings
     *     description: Retrieves configuration settings for a specific domain.
     *     parameters:
     *       - name: domain
     *         in: path
     *         required: true
     *         description: The domain for which to retrieve configuration settings.
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Config settings retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 config:
     *                   type: object
     *                   additionalProperties:
     *                     type: string
     *                 event:
     *                   type: object
     *                   properties:
     *                     id:
     *                       type: integer
     *                     name:
     *                       type: string
     *       400:
     *         description: Config settings not found
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

    static async getConfigSettings(req: Request, res: Response){
        try {
            const {config, event} = await WLCEventModel.getConfigSettingsByDomain(req.params.domain);
            res.status(200).json({ message: "Config settings", config, event });
        } catch (error) {
            res.status(400).json({ message: "Config settings not found", error });
        }
    }    

     /**
     * @swagger
     * /config:
     *   post:
     *     tags: [Config]
     *     summary: Create Config
     *     description: Creates new configuration settings.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Config'
     *     responses:
     *       201:
     *         description: Config created successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 config:
     *                   type: object
     *       400:
     *         description: Config not created
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
    static async create(req: Request, res: Response){
        try {
            const config = await WLCEventModel.create(req.body);
            res.status(201).json({ message: "Config created", config });
        } catch (error) {
            res.status(400).json({ message: "Config not created", error });
        }
    }

    /**
     * @swagger
     * /config:
     *   put:
     *     tags: [Config]
     *     summary: Update Config
     *     description: Updates existing configuration settings.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Config'
     *     responses:
     *       200:
     *         description: Config updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 message:
     *                   type: string
     *                 config:
     *                   type: object
     *       400:
     *         description: Config not updated
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
    static async update(req: Request, res: Response){
        try {
            const config = await WLCEventModel.update(req.body);
            res.status(200).json({ message: "Config updated", config });
        } catch (error) {
            res.status(400).json({ message: "Config not updated", error });
        }
    }
}