
import { Request, Response } from 'express';
import TicketModel from '../models/ticketModel';


export class TicketController {

    static async create(req: Request, res: Response) {
        try {
            const event = await TicketModel.create(req.body);
            res.status(201).json({ message: 'Ticket created', event });
        } catch (error) {
            res.status(400).json({ message: 'Ticket not created', error });
        }
    }

    static async createBatch(req: Request, res: Response) {
        try {
            const event = await TicketModel.createBatch(req.body);
            res.status(201).json({ message: 'Ticket created', event });
        } catch (error) {
            res.status(400).json({ message: 'Ticket not created', error });
        }
    }

    static async update(req: Request, res: Response) {

    }

    static async getTicketByEvent(req: Request, res: Response) {
        try {
            const tickets = await TicketModel.getTicketsByEvent(parseInt(req.params.eventId));
            res.status(200).json({ message: 'Tickets', tickets });
        } catch (error) {
            res.status(400).json({ message: 'Tickets not found', error });
        }
    }

    static async getTicketById(req: Request, res: Response) {
        try {
            const ticket = await TicketModel.getTicketById(parseInt(req.params.id));
            res.status(200).json({ message: 'Ticket', ticket });
        } catch (error) {
            res.status(400).json({ message: 'Ticket not found', error });
        }
    }

    static async getAllTickets(req: Request, res: Response) {
        try {
            const tickets = await TicketModel.getAllTickets();
            res.status(200).json({ message: 'Tickets', tickets });
        } catch (error) {
            res.status(400).json({ message: 'Tickets not found', error });
        }
    }
}