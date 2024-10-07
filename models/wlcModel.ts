import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class WLCEventModel{

    static async createWithEvent(config: any){
        const eventId = config.eventId;
        const domain = config.domain;

        // Insert each key-value pair in the config object
        for (const [key, value] of Object.entries(config)) {
            // Check if config value and key exist for domain
            const checkConfig = await prisma.whitelabelConfiguration.findFirst({
                where: { domain, config_key: key }
            });

            if(!checkConfig){
                await prisma.whitelabelConfiguration.create({
                    data: {
                        config_key: key,
                        config_value: String(value),
                        eventId,
                        domain
                    }
                });
            }
        }
    
        return config;
    }


    static async create(config: any){
        const domain = config.domain;
        const eventId = parseInt(config.eventId);


        // Insert each key-value pair in the config object
        let output = {};
        for (const [key, value] of Object.entries(config)) {
            // Check if config value and key exist for domain
            const checkConfig = await prisma.whitelabelConfiguration.findFirst({
                where: { domain, config_key: key, eventId: eventId, config_value: String(value) }
            });

            if(!checkConfig){
                output = await prisma.whitelabelConfiguration.create({
                    data: {
                        config_key: key,
                        config_value: String(value),
                        eventId,
                        domain
                    }
                });
            }else{
                throw new Error('Config already exists');
            }
        }
    
        return output ? output : config;
    }


    static async update(config: any){
        const domain = config.domain;
        const eventId = parseInt(config.eventId);


        // Insert each key-value pair in the config object
        let output = {};
        for (const [key, value] of Object.entries(config)) {
            // Check if we have to update the config value
            const checkConfig = await prisma.whitelabelConfiguration.findFirst({
                where: { domain, config_key: key, eventId }
            });

            if(checkConfig){
                output = await prisma.whitelabelConfiguration.update({
                    where: { id: checkConfig.id },
                    data: {
                        config_value: String(value)
                    }
                });
            }
        }
    
        return output ? output : config;
    }


    static async getConfigSettingsByDomain(domain: string){
        const config = await prisma.whitelabelConfiguration.findMany({
            where: { domain },
            include: { event: true }
        });

        let output: { [key: string]: string } = {};
        
        config.forEach((element: any) => {
            output[element.config_key] = element.config_value;
        })

        // Set Event ID
        output.eventId = String(config[0].eventId);
        
        const event = config[0].event;

        return {config: output, event };
    }
}

export default WLCEventModel;