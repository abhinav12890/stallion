// page.tsx
import About from "@/components/about";
import Contact from "@/components/contact";
import Customization from "@/components/customization";
import Intro from "@/components/intro";
import Products from "@/components/products";
import SectionDivider from "@/components/section-divider";
import Location from "@/components/location";
import SEO from "@/components/SEO";
import Horse from "@/public/logo.png";

// Define the metadata object for this page
const metadata = {
  title: "Stallion Technologies | E-bikes",
  description: "City Crawler: Your perfect urban mobility solution with speeds up to 25kmph, a range of 55Kms, and customizable options to suit your style and needs. Choose from 36V or 48V variants, starting at just $49,999.",
  image: Horse.src, // Replace with your image URL
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-2">
      {/* Pass metadata to the SEO component */}
      <SEO metadata={metadata} />
      <Intro />
      <SectionDivider />
      <Products />
      <Customization />
      <About />
      <Location />
      <Contact />
    </main>
  );
}
