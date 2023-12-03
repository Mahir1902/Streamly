import bcrypt from 'bcrypt'
import prismadb from '@/lib/prismadb'
import {NextResponse, NextRequest} from 'next/server'


export async function POST(req:NextRequest) {
    try {

        const {email, name, password} = await req.json()

         
        //Find existing user
        const existingUser = await prismadb.user.findUnique({
            where: {
                email
            }
        })

        if(existingUser) return new NextResponse('Email already in use', {status:422})

        const hashedPasword = await bcrypt.hash(password, 10)

        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPasword,
                image: '',
                emailVerified: new Date()
            }
        })

        return NextResponse.json(user)
        
    } catch (error) {
        console.log(error);
    }
}
