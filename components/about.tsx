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
  const { ref } = useSectionInView("About Us");
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
        Welcome to Stallion Technologies, your premier destination for custom electric bikes that redefine the way you ride. Our passion for innovation, sustainability, and adventure has led us to craft exceptional electric bikes tailored to your unique needs and desires.
      </p>
      
      <SectionHeading >Our Story</SectionHeading>
      <p className="mb-3 text-justify">
        Stallion Technologies was founded by a group of avid cyclists and electric vehicle enthusiasts who shared a common vision – to revolutionize urban transportation while preserving the environment. Our journey began with a simple idea: to build electric bikes that blend cutting-edge technology with impeccable design, providing riders with a thrilling and eco-friendly alternative for commuting, exploration, and recreation.
        With years of research and development, we've transformed this vision into a reality. Today, we proudly offer a range of customizable electric bikes that cater to a diverse range of riders, from city commuters seeking an eco-friendly solution to off-road adventurers craving thrilling rides through challenging terrains.      </p>
      
      <SectionHeading>Our Mission</SectionHeading>
      <p className="mb-3 text-justify">
      At Stallion Technologies, our mission is to empower people to embrace a greener, healthier, and more exciting way of commuting and exploring the world. We are dedicated to: </p>
      <ul className="list-disc">
        <li className="mb-3 text-justify">Quality Craftsmanship: Our electric bikes are meticulously crafted using the highest-quality materials and components to ensure unmatched performance, durability, and style.</li>
        <li className="mb-3 text-justify">Sustainability: We are committed to reducing our carbon footprint and contributing to a cleaner planet. Our electric bikes produce zero emissions and promote sustainable transportation.</li>
        <li className="mb-3 text-justify">Customization: We believe that every rider is unique, which is why we offer a wide range of customization options. Tailor your bike to your exact specifications, ensuring it meets your preferences and needs perfectly.</li>
        <li className="mb-3 text-justify">Innovation: We stay at the forefront of technology, continually researching and implementing the latest advancements in electric bike design to deliver bikes that offer cutting-edge features and an unparalleled riding experience.</li>
      </ul>

      <SectionHeading>Why Choose Stallion Technologies?</SectionHeading>
      <p className="mb-3 text-justify">
      Unparalleled Expertise: Our team comprises experienced engineers, designers, and cycling enthusiasts who are passionate about creating the best electric bikes on the market. </p>
      <ul className="list-disc">
        <li className="mb-3 text-justify">Customer-Centric Approach: We put our customers first. Your satisfaction is our top priority, and we're always here to assist you with any questions, concerns, or custom requests.</li>
        <li className="mb-3 text-justify">Customization Options: Create a bike that reflects your personality and riding style. From frame color to battery capacity, we offer a wide array of options to ensure your bike is truly one-of-a-kind.</li>
        <li className="mb-3 text-justify">Environmental Commitment: By choosing an electric bike from us, you're actively contributing to a cleaner, greener planet.</li>
        <li className="mb-3 text-justify">Exceptional Value: We believe in providing the highest quality at competitive prices, ensuring you get the best value for your investment.</li>
      </ul>     

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
