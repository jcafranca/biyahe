"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;

const VideoBackground = () => {
  const videos = [
    "https://cdn.pixabay.com/video/2023/09/13/180386-864121573_large.mp4",
    "https://cdn.pixabay.com/video/2023/05/15/163160-827112938_large.mp4",
    "https://cdn.pixabay.com/video/2023/04/11/158411-816637456_large.mp4",
    "https://cdn.pixabay.com/video/2022/12/03/141469-777708152_large.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1); // State for the next video to preload
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const getNextVideoIndex = () => {
    return (currentVideoIndex + 1) % videos.length; // Loop back to the first video after the last one
  };

  useEffect(() => {
    // Preload the next video by creating a hidden video element
    const preloadVideo = document.createElement("video");
    preloadVideo.src = videos[nextVideoIndex];
    preloadVideo.preload = "auto"; // Preload the next video in advance

    return () => {
      preloadVideo.remove(); // Cleanup the preloaded video element
    };
  }, [nextVideoIndex]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex(nextVideoIndex); // Set the preloaded video as the current one
    setNextVideoIndex(getNextVideoIndex()); // Queue another video to preload
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.src = videos[currentVideoIndex];
      videoElement.play();
    }
  }, [currentVideoIndex]);

  return (
    <div className="h-full w-full">
      <video
        // ref={videoRef}
        src="./videos/videoplayback.mp4"
        autoPlay
        muted
        loop
        // loop={videos.length === 1}
        playsInline
        className="video"
        // onEnded={handleVideoEnd}
      />
    </div>
  );
};

const WebsiteOverlay = () => {
  return (
    <div className="flex flex-col absolute z-10 px-10 text-white">
      <div
        className="flex font-bold flex-col backdrop-blur-[3px] my-auto bg-current/5 max-w-[38rem] p-4 items-start mt-28 rounded-3xl"
        style={{
          boxShadow: `0 4px 20px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <h1 className="uppercase text-2xl md:text-8xl">
          Never stop
          <p className="uppercase text-sm md:text-5xl mb-6">Exploring the world</p>
        </h1>
        <div className="mb-6 grid grid-flow-col gap-x-2">
          <MapPin />
          <p>
            Tagaytay City, Philippines · Boracay, Philippines · El Nido,
            Philippines · Bohol, Philippines · Cebu City, Philippines · City of
            Vigan, Philippines · Davao City, Philippines · Subic, Philippines ·
            Baguio City, Philippines · Alaminos, Philippines
          </p>
        </div>
        <div className="mr-auto flex space-x-2 ">
          <Button variant={"ghost"}>Get Started</Button>
          <Button className="bg-blue-600 text-white hover:bg-blue-500">Contact Us</Button>
        </div>
      </div>
      <div className="flex text-3xl gap-8 mt-auto"></div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="lg:flex">
      <WebsiteOverlay />
      <VideoBackground />
    </div>
  );
};

export default Hero;
