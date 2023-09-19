import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import Horse from "@/public/logo.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stallion Technologies |  E-bikes",
  description: "City Crawler: Your perfect urban mobility solution with speeds up to 25kmph, a range of 55Kms, and customizable options to suit your style and needs. Choose from 36V or 48V variants, starting at just $49,999.",
  image: Horse.src,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description}
        />
        {/* Add any additional meta tags you need here */}
        <meta
          property="og:image"
          content={metadata.image}
        />
        {/* Add other Open Graph (og:) tags as needed */}
      </head>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-20 sm:pt-28 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
