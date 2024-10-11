import { Router } from "express";
import { BaseController } from "../controllers/baseController";

export const createBaseRoutes = () => {
    const baseRouter = Router();

    //Mint NFT
    baseRouter.post('/mint', BaseController.mintNFT);

    return baseRouter;
}