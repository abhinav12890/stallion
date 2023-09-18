import React, { useRef } from "react";
import { customsData } from "@/lib/data"; // Import your custom data file
import { motion, useScroll, useTransform } from "framer-motion";

type CustomProps = typeof customsData[number];

export default function Custom({
  title,
  icon,
  description,
}: CustomProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[20rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col items-center h-[20rem]"> {/* Set a fixed height */}
        <div className="mt-4 text-4xl">
          {icon}
        </div>
        <div className="w-full p-4 sm:p-10 text-center">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
        </div>
      </section>
    </motion.div>
  );
}
