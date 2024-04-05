import prisma from "@/utils/db";
import Image from "next/image";
import React from "react";
import MovieCard from "./MovieCard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

async function getData(userId: string) {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: {
        where: {
          userId
        }
      },
      imageString: true,
      youtubeString: true,
      age: true,
      duration: true,
      releaseDate: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return data;
}

export default async function RecentlyAdded() {

  const session = await getServerSession(authOptions);

  const data = await getData(session?.user?.email as string);

  console.log(data)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6 ">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            alt="Movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />

          <div className="h-60 relative z-10 w-full hover:scale-125 opacity-0 hover:opacity-100 transform transition duration-500">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black border w-ull h-full rounded-lg flex items-center justify-center z-10">
              <Image
                src={movie.imageString}
                alt="Movie"
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />
              <MovieCard
                movieId={movie.id}
                title={movie.title}
                overview={movie.overview}
                youtubeUrl={movie.youtubeString}
                watchListId={movie.WatchLists[0]?.id}
                wathcList={movie.WatchLists.length > 0 ? true : false}
                age={movie.age}
                duration={movie.duration}
                year={movie.releaseDate}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
