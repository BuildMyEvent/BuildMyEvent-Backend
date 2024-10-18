import { Router } from "express";
import { BaseController } from "../controllers/baseController";

export const createBaseRoutes = () => {
    const baseRouter = Router();

    //Mint NFT
    baseRouter.post('/:ticket', BaseController.mintNFT);

    return baseRouter;
}