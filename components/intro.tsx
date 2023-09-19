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

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-full text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <video
        ref={videoRef}
        controls
        style={{
          width: "100%", // Set the video width to 100% to make it full width
          height:"auto",
          margin: 0,       // Remove margin
          padding: 0,      // Remove padding
        }}
        autoPlay
        loop
        muted
      >
        <source src="https://res.cloudinary.com/dsx8hhhjz/video/upload/stallon/wve6gdvnjcsrjmzs9gjl.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
