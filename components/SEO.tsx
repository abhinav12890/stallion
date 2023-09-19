// components/SEO.tsx
"use client";

// components/SEO.tsx

import { DefaultSeo } from 'next-seo';
import Horse from "@/public/logo.png";

const SEO = () => (
  <DefaultSeo
    openGraph={{
      type: 'website',
      url: 'https://stallion-tau.vercel.app/',
      title: 'Stallion Technologies',
      description: 'Pick your E-bikes',
      images: [
        {
          url: 'https://stallion-tau.vercel.app' + Horse.src, // Use the imported image source
          width: 1200,
          height: 630,
          alt: 'Stallion Technologies',
        },
      ],
    }}
  />
);

export default SEO;
