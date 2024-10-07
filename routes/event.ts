import { Router } from "express";
import { EventController } from "../controllers/eventController";

export const createEventRoutes = () => {
    const eventRouter = Router();

    // CRUD
    eventRouter.post('/create', EventController.createEvent);
    eventRouter.put('/update/:id', EventController.updateEvent);
    eventRouter.get('/my', EventController.getAllMyEvents);
    eventRouter.get('/:id', EventController.getEventById);

    return eventRouter;
}