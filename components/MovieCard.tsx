import React from "react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import { Heart } from "lucide-react";

type MovieCardProps = {
  title: string;
  overview: string;
  movieId: number;
  wathcList: boolean;
  watchListId: string;
  yotubeUrl: string;
  year: number;
  age: number,
  duration:number
};

export default function MovieCard({
  title,
  overview,
  movieId,
  watchListId,
  wathcList,
  yotubeUrl,
  year,
  age,
  duration
}: MovieCardProps) {
  return <>
    
    <button>
        <FaPlay className="h-12 w-12 text-gray-200"/>
    </button>

    <div className="absolute right-5 top-5">
        {wathcList ? <form>
            <Button variant={'outline'} size={'icon'}>
                <Heart className="w-4 h-4 text-red-500"/>
            </Button>
        </form> : <form>
        <Button variant={'outline'} size={'icon'}>
                <Heart className="w-4 h-4 text-white"/>
            </Button>
        </form> }
    </div>
        
    <div className="absolute bottom-0 text-white p-5 left-0">
        <h1 className="font-bold line-clamp-1 text-lg">{title}</h1>
        <div className="flex gap-x-2 items-center">
            <p className="font-normal text-sm">{year}</p>
            <p className="font-normal border border-gray-200 rounded text-sm py-0.5 px-1">{age}+</p>
            <p className="font-normal text-sm">{duration}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">{overview}</p>
    </div>

  </>
}
