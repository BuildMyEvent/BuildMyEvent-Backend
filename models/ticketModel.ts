import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class TicketModel{

    static async createTicket(body: any){
        const { name, price, eventId } = body;

        const ticket = await prisma.ticket.create({
            data: {
                eventId,
                ownerId,
                type,
                isUsed: false,
                price
            }
        })

        return ticket;
    }

}

export default TicketModel;