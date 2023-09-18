"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Products() {
  const { ref } = useSectionInView("Products", 0.5);

  return (
    <section ref={ref} id="products" className="scroll-mt-28 mb-28">
      <SectionHeading>Pick your Quick</SectionHeading>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
            {index < projectsData.length - 1 && <div className="ml-4"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
