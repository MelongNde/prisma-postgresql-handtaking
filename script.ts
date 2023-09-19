import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    // await prisma.user.deleteMany()
    // const users = await prisma.user.findUnique({
    //     where: {
    //         age_name: {
    //             age: 24,
    //             name: "Simon"
    //         }
    //     }
    // })


    await prisma.user.createMany({
        data: [{
            name: "Ally",
            age: 32,
            email: "ally@gmail.com"
        }]
    })
    // console.log(user)
}

main().catch(e => {
    console.error(e.message)
}).finally(async () => {
    await prisma.$disconnect()
})