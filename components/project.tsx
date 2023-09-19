"use client";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  speed,
  range,
  imageUrl,
  availability,
  price,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className={`bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative ${imageUrl ? "sm:flex" : ""
          } sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}
      >
        {imageUrl && (
          <div className="w-full sm:w-1/2 p-4 sm:p-10">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="w-full rounded-lg shadow-2xl transition-transform transform scale-100 group-hover:scale-110"
            />
          </div>
        )}
        <div
          className={`w-full sm:w-1/2 p-4 sm:p-10 relative ${imageUrl ? "sm:mt-0" : ""
            }`}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-justify">
            {description}
          </p>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-justify">
            {speed}
          </p>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-justify">
            {range}
          </p>
          <div className="mt-2 text-gray-700 dark:text-white/70">
            {availability}
          </div>
          <div className="mt-2 font-semibold text-gray-800 dark:text-white">
            Price: {price}
          </div>
          <div className="mt-4">
            <button className="hidden sm:block bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 absolute bottom-4">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
