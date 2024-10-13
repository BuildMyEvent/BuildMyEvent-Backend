import { Request, Response } from 'express';
import BaseModel from '../models/baseModel';

export class BaseController {
    static async mintNFT(req: Request, res: Response) {
        // Should be 0, 1, 2 depending on the route called
        const ticketType = parseInt(req.params.ticket);

        if (![0, 1, 2].includes(ticketType)) {
            res.status(400).json({ message: 'Invalid ticket type' });
        } 

        try {
            const transactionHash = await BaseModel.mint(req.body, ticketType);
            res.status(200).json({ message: 'NFT minted', transactionHash });
        } catch (error) {

            console.log('error', error);

            res.status(400).json({ message: 'NFT not minted', error });
        }
    }
}
