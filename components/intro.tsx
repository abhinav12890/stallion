"use client";
import React, { useEffect, useRef } from "react";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const startVideoAutoplay = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error("Autoplay failed:", error);
        });
      }
    };
    startVideoAutoplay();
  }, []);
<div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cumque nemo sed incidunt architecto repellat sit omnis libero, saepe praesentium nostrum dolores! Deserunt aliquid cum amet, harum aperiam expedita animi!</div>
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-full text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <video
        ref={videoRef}
        controls
        width="100%" 
        height="auto" 
        autoPlay
        loop
      >
        <source src="https://res.cloudinary.com/dsx8hhhjz/video/upload/stallon/wve6gdvnjcsrjmzs9gjl.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
    </section>
  );
}
