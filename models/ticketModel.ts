import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class TicketModel{

    // static async createWithEvent(body: any){
    //     const { eventId, ownerId, type, price } = body;

    //     const {} = body;

    //     const ticket = await prisma.ticket.create({
    //         data: {
    //             eventId,
    //             ownerId,
    //             type,
    //             isUsed: false,
    //             price,
    //             image,
    //             builderScore
    //         }
    //     })

    //     return ticket;
    // }

    // static async updateTicket(ticketId: number, body: any){
    //     const { type, price, isUsed } = body;

    //     const ticket = await prisma.ticket.update({
    //         where: { id: ticketId },
    //         data: {
    //             type,
    //             price,
    //             isUsed,
    //             image,
    //             builderScore
    //         }
    //     });

    //     return ticket;
    // }

    // static async getTicketById(ticketId: number){
    //     const ticket = await prisma.ticket.findUnique({ where: { id: ticketId } });

    //     if(!ticket) throw new Error('Ticket not found');

    //     return ticket;
    // }

    
}

export default TicketModel;