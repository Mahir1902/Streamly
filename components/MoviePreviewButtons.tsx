"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import VideoModal from "./VideoModal";

type MoviePreviewButtonsProps = {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
};

export default function MoviePreviewButtons({
  overview,
  age,
  duration,
  id,
  releaseDate,
  title,
  youtubeUrl,
}: MoviePreviewButtonsProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        className="text-lg font-medium"
        onClick={() => setIsDialogOpen(true)}
      >
        <PlayCircle className="mr-2 h-6 w-6" /> Play
      </Button>
      <Button
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
        onClick={() => setIsDialogOpen(true)}
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn More
      </Button>

      <VideoModal state={isDialogOpen} changeState={setIsDialogOpen} title={title} overview={overview} releaseDate={releaseDate} youtubeUrl={youtubeUrl}age={age}duration={duration}/>
    </>
  );
}
