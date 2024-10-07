
import { Request, Response } from 'express';
import WLCEventModel from '../models/wlcModel';
import EventModel from '../models/eventModel';


export class configController{  
    
    static async getConfigSettings(req: Request, res: Response){
        try {
            const {config, event} = await WLCEventModel.getConfigSettingsByDomain(req.params.domain);
            res.status(200).json({ message: "Config settings", config, event });
        } catch (error) {
            res.status(400).json({ message: "Config settings not found", error });
        }
    }    

    static async create(req: Request, res: Response){
        try {
            const config = await WLCEventModel.create(req.body);
            res.status(201).json({ message: "Config created", config });
        } catch (error) {
            res.status(400).json({ message: "Config not created", error });
        }
    }

    static async update(req: Request, res: Response){
        try {
            const config = await WLCEventModel.update(req.body);
            res.status(200).json({ message: "Config updated", config });
        } catch (error) {
            res.status(400).json({ message: "Config not updated", error });
        }
    }
}