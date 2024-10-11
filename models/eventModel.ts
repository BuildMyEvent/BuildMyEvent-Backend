import { PrismaClient } from "@prisma/client";
import WLCEventModel from "./wlcModel";
import TicketModel from "./ticketModel";
import e from "express";

const prisma = new PrismaClient();

class EventModel{

    static async createEvent(currentUser: any, body: any){
        const { title, description, startDate, location, endDate, domain } = body;    
        let config = null;
        let tickets_array: any[] = [];
        let startDateObj = new Date(startDate);
        let endDateObj = new Date(endDate);

        //Check if we have a Event with same Domain
        const checkEvent = await prisma.event.findFirst({
            where: { domain }
        });

        if(checkEvent) throw new Error('Event already exists');

        const event = await prisma.event.create({
            data: {
                title,
                description,
                startDate: startDateObj,
                endDate: endDateObj,
                location,
                domain,
                organizerId: currentUser
            }
        })

        if(body.config){
            // Add Event ID to config object
            body.config.eventId = event.id;
            config = await WLCEventModel.createWithEvent(body.config);
        }

        if (body.tickets) {
            tickets_array = await Promise.all(
                body.tickets.map(async (ticket: any) => {
                    ticket.eventId = event.id;
                    return await TicketModel.create(ticket);
                })
            );
        }

        return { event, config, tickets: tickets_array };
    }

    static async updateEvent(currentUser: any, eventId: number, body: any){
        // Update only the fields that are passed
        const { title, description, startDate, location, endDate, domain } = body;

        let startDateObj = new Date(startDate);
        let endDateObj = new Date(endDate);

        //Check if event exists
        const checkEvent = await prisma.event.findFirst({
            where: { domain: domain, id: { not: eventId } }
        });
        
        if(checkEvent !== null){
            throw new Error('Event with domain exist, choose another domain')
        };

        //Update domain in WLC if changed, check if domain it diferent
        const current_event = await prisma.event.findUnique({
            where: { id: eventId }
        });

        if(current_event){
            await prisma.whitelabelConfiguration.updateMany({
                where: { domain: current_event.domain },
                data: { domain: domain }
            })
        }

        const event = await prisma.event.update({
            where: { id: eventId },
            data: {
                title,
                description,
                startDate: startDateObj,
                endDate: endDateObj,
                location,
                domain,
                organizerId: currentUser.id
            }
        });

        return event;
    }

    static async getEventById(eventId: number){
        const event = await prisma.event.findUnique({
            where: { id: eventId },
            include: {
                tickets: true,
            }
        });
        
        if(!event) throw new Error('Event not found');
        
        return event;
    }

    static async getMyEvents(currentUser: any){
        //Get my EEVNTS
        const events = await prisma.event.findMany({
            where: { organizerId: currentUser },
            include: {
                tickets: true,
            }
        });
        
        return events;
    }
}

export default EventModel;