import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

class UserModel{
    static async getUserById(id: number){
        const user = await prisma.user.findUnique({ where: { id } });
        
        if(!user) throw new Error('User not found');
        
        return user;
    }

    static async create(name: string, lastname: string , email: string, password: string, wallet?: string){

        const checkUser = await prisma.user.findUnique({ where: { email: email } });
        
        if(checkUser) throw new Error('User already exists');

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                lastname,
                wallet
            }
        });

        return user;
    }

    static async update(user_id: number,body: any){
        const { name, lastname, email, password, wallet } = body;

        let hashedPassword;
        if(password){
            hashedPassword = await bcrypt.hash(password, 10);
        }

        try {
            const user = await prisma.user.update({
                where: { id: Number(user_id) },
                data: {
                    name,
                    lastname,
                    email,
                    password: hashedPassword || undefined,
                    wallet
                }
            });

            return user;
        } catch (error) {
            throw new Error('User not found');
        }
    }

    static async delete(id: number){
        try {
            const user = await prisma.user.delete({ where: { id: Number(id) } });

            return user;
        } catch (error) {
            throw new Error('User not found');
        }
    }

    static async getAllUsers(){
        const users = await prisma.user.findMany();
        
        return users;
    }
         
}

export default UserModel;