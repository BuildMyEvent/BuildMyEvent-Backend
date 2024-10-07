import { PrismaClient } from "@prisma/client";
import WLCEventModel from "./wlcModel";

const prisma = new PrismaClient();

class EventModel{

    static async createEvent(currentUser: any, body: any){
        const { title, description, startDate, location, endDate, domain } = body;    
        let config = null;

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

        return {event: event, config: config};
    }

    static async updateEvent(currentUser: any, eventId: number, body: any){
        // Update only the fields that are passed
        const { title, description, startDate, location, endDate, domain } = body;

        let startDateObj = new Date(startDate);
        let endDateObj = new Date(endDate);

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
            where: { id: eventId }
        });
        
        if(!event) throw new Error('Event not found');
        
        return event;
    }

    static async getMyEvents(currentUser: any){
        //Get my EEVNTS
        const events = await prisma.event.findMany({
            where: { organizerId: currentUser }
        });
        
        return events;
    }
}

export default EventModel;