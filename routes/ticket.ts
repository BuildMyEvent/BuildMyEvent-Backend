import { Router } from "express";
import { TicketController } from "../controllers/ticketController";

export const createTicketRoutes = () => {
    const ticketRouter = Router();

    // CRUD
    ticketRouter.post('/create', TicketController.create);
    ticketRouter.post('/createbatch', TicketController.createBatch);
    
    // Get Ticket by Event
    ticketRouter.get('/by-event/:eventId', TicketController.getTicketByEvent);
    ticketRouter.get('/by-id/:id', TicketController.getTicketById);

    // Get All Tickets
    ticketRouter.get('/all', TicketController.getAllTickets);


    return ticketRouter;
}