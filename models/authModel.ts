import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import {config} from '../config/auth';

const prisma = new PrismaClient();

class AuthModel{
    static async register(name: string, lastname: string , email: string, password: string, wallet?: string){

        const checkUser = await prisma.user.findUnique({ where: { email: email } });
        
        if(checkUser) throw new Error('User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                lastname,
                wallet: wallet || null
            }
        });

        return user;
    }

    static async login(email: string, password: string){
        const user = await prisma.user.findUnique({ where: { email } });
        if(!user) throw new Error('invalid email or password');

        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid) throw new Error('Invalid password');

        const token = jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, { expiresIn: '1d' });        

        return { token, user: { id: user.id, name: user.name, lastname: user.lastname, email: user.email, wallet: user.wallet } };
    }

}

export default AuthModel;