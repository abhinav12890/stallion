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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.729558618329!2d77.33238287605394!3d28.397235194725948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdcf8e385462d%3A0xa113933082d2dc0b!2s714%2C%20Chaudhary%20Charan%20Singh%20Marg%2C%20Sector%2014%2C%20Faridabad%2C%20Haryana%20121006!5e0!3m2!1sen!2sin!4v1695124903153!5m2!1sen!2sin"
          style={{ height: "100%", width: "100%", border: "0" }}
          loading="lazy"
        />
      </div>
    </section>
  );
}
