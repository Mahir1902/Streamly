import prismadb from '@/lib/prismadb'
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {compare }from 'bcrypt'
import { PrismaAdapter } from '@auth/prisma-adapter';






const handler = NextAuth({
    adapter: PrismaAdapter(prismadb),
    providers: [
        Credentials({
            id: 'credentials',
            name: 'cretentials',
            credentials: {
                email: {
                    label: 'Email',
                    type:'text'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials.password) {
                    throw new Error('Email and Password are required')
                }

                // Find user in databse using email 
                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })

                if(!user || !user.hashedPasword) throw new Error('User does not exist')

                //Check if user entered the correct password
                const isPasswordCorrect = await compare(credentials.password, user.hashedPasword)
                if(!isPasswordCorrect) throw new Error('Password is incorrect')

                return user
            },
        })
    ],
    pages: {
        signIn: '/auth'
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET
    },
    secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET, handler as POST}