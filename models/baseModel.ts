import { PrismaClient } from "@prisma/client";
import { mintNFT } from '../services/base';

const prisma = new PrismaClient();

class BaseModel {

    static async mint(body: any, ticketType: number) {
        const { eventId, userAddress } = body;

        // TODO: add contractAddress field to event
        // Check for eventId in the database to get the contract address, for MVP only 1 event so we hardcode address

        // const event = await prisma.event.findFirst({
        //     where: { id: eventId }
        // });
        
        // if(!event) throw new Error('Event not found');

        // const contractAddress = event.contractAddress;

        // Ticket smart contract address for MVP 
        const contractAddress = '0x76117434Cd97d01c4073CC9b051c8141376C2878'

        let ticket;

        // Get the ticket based on the ticket type
        switch (ticketType) {
            case 0: {
                ticket = await prisma.ticket.findFirst({ where: { eventId, title: 'GENERAL'}});
                break;
            }
            case 1: {
                ticket = await prisma.ticket.findFirst({ where: { eventId, title: 'VIP'}});
                break;
            }
            case 2: {
                ticket = await prisma.ticket.findFirst({ where: { eventId, title: 'BUILDER'}});
                break;
            }
        }

        if(!ticket) throw new Error('Ticket not found');

        // Get metadataURI from ticket
        const metadataURI = ticket.metadataURI;
        //@ts-expect-error
        const transactionHash = await mintNFT(contractAddress, userAddress, metadataURI);

        return transactionHash;
    }

}

export default BaseModel;