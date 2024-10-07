import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

async function main() {

    // Seed Users
    const hashedPassword = await bcrypt.hash('123456', 10);
    const villa = await prisma.user.create({
        data:{
            email: 'jpvillaplana@gmail.com',
            password: hashedPassword,
            name: 'Juan Pablo',
            lastname: 'Villaplana',
            wallet: ''
        }
    })

    const robert = await prisma.user.create({
        data:{
            email: 'rsft6000@gmail.com',
            password: hashedPassword,
            name: 'Robert',
            lastname: 'Ramirez',
            wallet: ''
        }
    })
    
    


    // Seed Roles
    const role1 = await prisma.role.create({
        data:{
            name: 'Admin'
        }
    })

    const role2 = await prisma.role.create({
        data:{
            name: 'Customer'
        }
    })

    const role3 = await prisma.role.create({
        data:{
            name: 'Organizer'
        }
    })


    // Seed UserRoles

    const userRole1 = await prisma.userRole.create({
        data:{
            userId: user1.id,
            roleId: role1.id
        }
    })
}


main().catch(e => {
    console.error(e)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect()
});