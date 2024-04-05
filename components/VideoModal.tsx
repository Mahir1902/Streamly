import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type VideoModalProps = {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changeState: any;
  releaseDate: number;
  age: number;
  duration: number;
};

export default function VideoModal({
  changeState,
  overview,
  state,
  title,
  youtubeUrl,
  releaseDate,
  age,
  duration,
}: VideoModalProps) {
  return (
    <Dialog open={state} onOpenChange={() => changeState(!state)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>

        <DialogTitle className="text-white">{title}</DialogTitle>
        <DialogDescription className="line-clamp-3">{overview}</DialogDescription>
        <div className="text-white flex gap-x-3 items-center">
            <p>{releaseDate}</p>
            <p className="border py-0.5 px-1 border-gray-200 rounded">{age}+</p>
            <p>{duration}h</p>
        </div>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} className="w-full">

        </iframe>
      </DialogContent>
    </Dialog>
  );
}
