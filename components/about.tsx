"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { milestonesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import SectionDivider from "@/components/section-divider";


export default function About() {
  const { ref } = useSectionInView("About");
  const { theme } = useTheme();

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About us</SectionHeading>
      <p className="mb-3 text-justify">
        Joy Singh - Passed out from BTech ECE and specializes in Digital Electronics, designing with 3 research papers to his name and is currently working as Network Engineer in BT Group.
      </p>
      <p className="mb-3 text-justify">
        Sudhanshu Kr. Jha - Passed out BTech ECE undergraduate and specializes in analog electronics and has 3 research papers under his name.
      </p>
      <p className="mb-3 text-justify">
        Sukrit Ranjan Goswami - Graduated from Shaheed Bhagat Singh college, Delhi University and has 2 years of corporate experience as Senior Analyst at Deloitte USI.
      </p>
      <p className="text-justify">
        Yash Bhardwaj - An undergrad of BTech ECE. He has proficiency in designing, testing as well as media outreach and validation.
      </p>
      <div className="flex flex-col items-center px-2"><SectionDivider /></div>
      <SectionHeading>Recent updates</SectionHeading>
      <p className="mb-3 text-justify">
        Currently we have created a Minimal Viable product and are currently focusing on quality and fabrication of In-house electronics.
      </p>
      <p className="text-justify">
        We have our own vendors for fabrication, Assembly, and Powder coating based out of Delhi NCR itself.
        We have established our base of operation in Faridabad, Haryana which is equipped with state of the art computers for designing and electronics simulation.
        We are currently working on two more designs which shall be launched within 10 months along with a partnership with local bike and cycle vendors used as our retail partners.
        Our plan is to sell about 1000+ bikes for the upcoming 18 months.
      </p>
      <div className="flex flex-col items-center px-2"><SectionDivider /></div>
      <SectionHeading>Milestone</SectionHeading>
      <VerticalTimeline lineColor="">
        {milestonesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-justify">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>

  );
}
