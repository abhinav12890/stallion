"use client";
import React from "react";
import Horse from "@/public/logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center text-gray-500 bg-black pt-3 flex flex-col h-full">
      <div className="flex-grow">
        <small className="mb-2 block text-xs">
          &copy; 2023 Stallion Technologies. All rights reserved.
        </small>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built by Abhinav Kumar with
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
          Framer Motion, React Email & Resend, Vercel hosting.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-4 lg:flex-row">
        <div className="text-4xl lg:text-8xl lg:mr-4">Coming Soon</div>
        <div className="mt-4 lg:mt-0">
          <Image
            src={Horse}
            alt="logo"
            quality={95}
            width={200}
            height={200} 
            className=""
          />
        </div>
      </div>
    </footer>
  );
}
