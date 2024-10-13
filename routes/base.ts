import { Router } from "express";
import { BaseController } from "../controllers/baseController";

export const createBaseRoutes = () => {
    const baseRouter = Router();

    //Mint NFT
    baseRouter.post('/mint/:ticket', BaseController.mintNFT);

    return baseRouter;
}