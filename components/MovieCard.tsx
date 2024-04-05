"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import { Heart } from "lucide-react";
import VideoModal from "./VideoModal";
import { addToWatchlist, removeFromWatchlist } from "@/app/actions";
import { usePathname } from "next/navigation";
import path from "path";

type MovieCardProps = {
  title: string;
  overview: string;
  movieId: number;
  wathcList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  duration: number;
};

export default function MovieCard({
  title,
  overview,
  movieId,
  watchListId,
  wathcList,
  youtubeUrl,
  year,
  age,
  duration,
}: MovieCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
        <FaPlay className="h-12 w-12 text-gray-200" />
      </button>

      <div className="absolute right-5 top-5">
        {wathcList ? (
          <form action={removeFromWatchlist}>
            <input type="hidden" name="watchlistId" value={watchListId} />
            <input type="hidden" name='pathname' value={pathname} />
            <Button variant={"outline"} size={"icon"}>
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form action={addToWatchlist}>
            <input type="hidden" name='movieId' value={movieId} />
            <input type="hidden" name='pathname' value={pathname} />
            <Button variant={"outline"} size={"icon"}>
              <Heart className="w-4 h-4 text-white" />
            </Button>
          </form>
        )}
      </div>

      <div className="absolute bottom-0 text-white p-5 left-0">
        <h1 className="font-bold line-clamp-1 text-lg">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal border border-gray-200 rounded text-sm py-0.5 px-1">
            {age}+
          </p>
          <p className="font-normal text-sm">{duration}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>
      <VideoModal
        youtubeUrl={youtubeUrl}
        key={movieId}
        title={title}
        overview={overview}
        state={isModalOpen}
        changeState={setIsModalOpen}
        releaseDate={year}
        duration={duration}
        age={age}
      />
    </>
  );
}
