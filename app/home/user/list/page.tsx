import MovieCard from '@/components/MovieCard'
import { authOptions } from '@/utils/auth'
import prisma from '@/utils/db'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'


async function getData(userId:string) {
    const data = await prisma.watchList.findMany({
        where: {
            userId
        },
        select: {
            Movie: {
                select: {
                    title:true,
                    age:true,
                    duration:true,
                    imageString:true,
                    releaseDate:true,
                    id:true,
                    overview:true,
                    WatchLists:true,
                    youtubeString:true,
                }
            }

        }
    })

    return data
}

export default async function page() {

    const session = await getServerSession(authOptions)

    const data = await getData(session?.user?.email as string)

  return (
    <>
    <h1 className='text-white text-4xl font-bold mt-10 px-5 sm:px-0'>Your Watclist</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-6 px-5">
      {data.map((movie) => (
        <div key={movie.Movie?.id} className="relative h-60">
          <Image
            src={movie.Movie?.imageString as string}
            alt="Movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />

          <div className="h-60 relative z-10 w-full hover:scale-125 opacity-0 hover:opacity-100 transform transition duration-500">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black border w-ull h-full rounded-lg flex items-center justify-center z-10">
              <Image
                src={movie.Movie?.imageString as string}
                alt="Movie"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />
              <MovieCard
                movieId={movie.Movie?.id as number}
                title={movie.Movie?.title as string}
                overview={movie.Movie?.overview as string}
                youtubeUrl={movie.Movie?.youtubeString as string}
                watchListId={movie.Movie?.WatchLists[0]?.id as string}
                wathcList={movie.Movie?.WatchLists.length as number > 0 ? true : false}
                age={movie.Movie?.age as number}
                duration={movie.Movie?.duration as number}
                year={movie.Movie?.releaseDate as number}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
