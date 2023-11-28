import { PrismaClient } from "@prisma/client";

// Due to hot reloading in Next.js we save the prisma client in a global file so that it is not affected by the reload 


const client = global.prismadb || new PrismaClient()

if(process.env.NODE_ENV === 'production') global.prismadb = client

export default client