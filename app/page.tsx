import About from "@/components/about";
import Contact from "@/components/contact";
import Customization from "@/components/customization";
import Intro from "@/components/intro";
import Products from "@/components/products";
import SectionDivider from "@/components/section-divider";
import Location from "@/components/location";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-2">
      <SEO/>
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
