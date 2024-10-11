import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class TicketModel{

    static async create(body: any){   
        const { eventId, type, price, builderScore, image, title, description} = body;

        const {} = body;

        const ticket = await prisma.ticket.create({
            data: {
                title,
                description,
                eventId,
                type,
                isUsed: false,
                price,
                image,
                builderScore: builderScore || 0
            }
        })

        return ticket;
    }

    static async createBatch(body: any){     
        //Check if the Event Exists before creating the tickets
        const { eventId } = body[0];

        const checkEvent = await prisma.event.findUnique({ where: { id: eventId } });
        
        if(!checkEvent) throw new Error('Event not found');

        const tickets_array = await Promise.all(
            body.map(async (ticket: any) => {
                // Check if the ticket exists
                return await TicketModel.create(ticket);
            })
        );

        return tickets_array
    }

    static async updateTicket(ticketId: number, body: any){
        const {ownerId, type, price, builderScore, image, isUsed, description, title} = body;

        const ticket = await prisma.ticket.update({
            where: { id: ticketId },
            data: {
                type,
                price,
                isUsed,
                image,
                ownerId,
                builderScore
            }
        });

        return ticket;
    }

    static async getTicketById(ticketId: number){
        const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });

        if(!ticket) throw new Error('Ticket not found');

        return ticket;
    }

    static async getTicketsByEvent(eventId: number){
        const tickets = await prisma.ticket.findMany({ where: { eventId } });

        return tickets;
    }

    static async getAllTickets(){
        const tickets = await prisma.ticket.findMany();

        return tickets;
    }
    
}

export default TicketModel;