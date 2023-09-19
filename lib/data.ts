import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GiCarSeat } from 'react-icons/gi';
import { IoIosColorPalette } from 'react-icons/io';
import { AiFillTool } from 'react-icons/ai';
import product1Img from "@/public/teaser2.png";
import product2Img from "@/public/teaser3.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Products",
    hash: "#products",
  },
  {
    name: "Customization",
    hash: "#customization",
  },
  {
    name: "About Us",
    hash: "#about",
  },
  {
    name: "Location",
    hash: "#location",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const milestonesData = [
  {
    title: "Milestone 1",
    description: "Beginning of planning and designing of second prototype which will be finalised by Oct’23",
    icon: React.createElement(CgWorkAlt),
    date: "Sep,2023",
  },
  {
    title: "Milestone 2",
    description: "During this phase we plan to sell around 50 E-bikes and improvise our future plans based on the suggestions provided by our marketing surveys.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec,2023",
  },
  {
    title: "Milestone 3",
    description: "During this time we try and sell 300+ bikes and improve upon the other aspects of the product refinement.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun,2024",
  },
  {
    title: "Milestone 4",
    description: "During this phase we focus on the expansion of the retail network.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec,2024",
  },
  // Add more milestones as needed
] as const;

export const projectsData = [
  {
    title: "City Crawler",
    description: "Best suited to urban jungle",
    speed: "Speed - 25kmph",
    range: "Range - 55Kms",
    imageUrl: product1Img,
    availability: "Available in 36V and 48V variants",
    price: "Rs:49999 and Rs:54999",
  },
  {
    title: "Ultra Dune",
    description: "Mobility for rough terrain",
    speed: "Speed - 35kmph",
    range: "Range - 60Kms",
    imageUrl: product2Img,
    availability: "Available in 48V variant only, High torque",
    price: "Rs:58999",
  },
] as const;


export const customsData = [
  {
    title: "Colour",
    icon: React.createElement(IoIosColorPalette),
    description: "We are offering 20 deafult color variants and with some addtional cost we can offer more any other requested color option",
  },
  {
    title: "Personal Touch",
    icon: React.createElement(AiFillTool),
    description: "An area specifically designed based on your needs, add engraving, add your initials and many more to make your ride more you.",
  },
  {
    title: "Seat and Mods",
    icon: React.createElement(GiCarSeat), 
    description: "Select your own seat types based on our 3 offered designs, along with modifications based on your daily suited needs",
  },
] as const;



