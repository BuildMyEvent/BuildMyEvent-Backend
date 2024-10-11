
import { Request, Response } from 'express';
import TicketModel from '../models/ticketModel';


export class TicketController{
    
    static async create(req: Request, res: Response){
        try {
            const event = await TicketModel.create(req.body);
            res.status(201).json({ message: 'Ticket created', event });
        } catch (error) {
            res.status(400).json({ message: 'Ticket not created', error });
        }
    }    

    static async createBatch(req: Request, res: Response){
        try {
            const event = await TicketModel.createBatch(req.body);
            res.status(201).json({ message: 'Ticket created', event });
        } catch (error) {
            res.status(400).json({ message: 'Ticket not created', error });
        }
    }

    static async update(req: Request, res: Response){

    }

    static async getTicketByEvent(req: Request, res: Response){

    }

    static async getAllTickets(req: Request, res: Response){
    
    }
}