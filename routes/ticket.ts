import { Router } from "express";
import { TicketController } from "../controllers/ticketController";

export const createTicketRoutes = () => {
    const ticketRouter = Router();

    // CRUD
    ticketRouter.post('/create', TicketController.create);
    ticketRouter.post('/createbatch', TicketController.createBatch);

    return ticketRouter;
}