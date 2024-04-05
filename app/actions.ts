'use server'

import { authOptions } from "@/utils/auth"
import prisma from "@/utils/db"
import { getServerSession } from "next-auth"
import { revalidatePath } from "next/cache"


export async function addToWatchlist(formData: FormData) {
    'use server'

    const movieId = formData.get('movieId')
    const pathname = formData.get('pathname') as string

    const session = await getServerSession(authOptions)


    console.log(movieId)

    const data = await prisma.watchList.create({
        data: {
            userId: session?.user?.email as string,
            movieId: Number(movieId)
        }
    })

    console.log(data)

    revalidatePath(pathname)
}


export async function removeFromWatchlist(formData: FormData) {
    'use server'

    
    const pathname = formData.get('pathname') as string
    const watchlistId = formData.get('watchlistId') as string

    

    const data = await prisma.watchList.delete({
        where: {
            id: watchlistId
            
        }
    })

    console.log(data)

    revalidatePath(pathname)
}