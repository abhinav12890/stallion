"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Location() {
  const { ref } = useSectionInView("Location");

  return (
    <section
      id="location"
      ref={ref}
      className="mb-28 w-full scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Our Location</SectionHeading>
      
      <div style={{ height: "300px", width: "100%", position: "relative" }}>
        <iframe
          className="gmap"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7013.093670777791!2d77.079953!3d28.493191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196900000001%3A0xa980dae09392b031!2sPan%20India%20Consultant%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1675603970909!5m2!1sen!2sus"
          style={{ height: "100%", width: "100%", border: "0" }}
          loading="lazy"
        />
      </div>
    </section>
  );
}
