import { Request, Response } from 'express';
import EventModel from '../models/eventModel';
import { getCurrentUser } from '../utils/auth';


export class EventController {
 
  static async createEvent(req: Request, res: Response) {
    const currentUser = getCurrentUser(req);

    try {
      const event = await EventModel.createEvent(currentUser?.id, req.body);
      res.status(201).json({ message: 'Event created', event });
    } catch (error) {
      res.status(400).json({ message: 'Event not created', error });
    }
  }

  static async updateEvent(req: Request, res: Response) {
    const currentUser = getCurrentUser(req);
    const event_id = parseInt(req.params.id);

    try {
      const event = await EventModel.updateEvent(currentUser?.id, event_id, req.body);
      res.status(200).json({ message: 'Event updated', event });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: 'Event not updated', error });
    }
  }

 
  static async getEventById(req: Request, res: Response) {
    const event_id = req.params.id;

    try {
      const event = await EventModel.getEventById(parseInt(event_id));
      res.status(200).json({ message: 'Event', event });
    } catch (error) {
      res.status(400).json({ message: 'Event not found', error });
    }
  }

  static async getAllMyEvents(req: Request, res: Response) {
    const currentUser = getCurrentUser(req);

    try {
      const events = await EventModel.getMyEvents(currentUser?.id);
      res.status(200).json({ message: 'Events', events });
    } catch (error) {
      res.status(400).json({ message: 'Events not found', error });
    }
  }
}

export default EventController;
