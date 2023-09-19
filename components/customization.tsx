"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { customsData } from "@/lib/data"; // Import your custom data file
import { useSectionInView } from "@/lib/hooks";
import Custom from "./custom";

export default function Customization() {
  const { ref } = useSectionInView("Customization");

  return (
    <section id="customization" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Customizations Offered</SectionHeading>
      <div className="flex flex-wrap justify-center ">
        {customsData.map((custom, index) => (
          <React.Fragment key={index}>
            <Custom {...custom} />
            {index < customsData.length - 1 && <div className="ml-4"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
