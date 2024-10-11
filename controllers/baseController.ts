import { Request, Response } from 'express';

export class BaseController {
    static mintNFT(req: Request, res: Response) {
        res.status(200).json({ message: 'NFT minted' });
    }
}