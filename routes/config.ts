import { Router } from "express";
import { configController } from "../controllers/configController";

export const createConfigRoutes = () => {
    const configRouter = Router();

    // Get Config by Domain
    configRouter.post('/create', configController.create);
    configRouter.put('/update', configController.update);
    configRouter.get('/by-domain', configController.getConfigSettings);

    
    return configRouter;
}