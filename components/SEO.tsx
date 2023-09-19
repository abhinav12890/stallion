// components/SEO.tsx
"use client";

import { DefaultSeo } from 'next-seo';

const SEO = () => (
  <DefaultSeo
    openGraph={{
      type: 'website',
      url: 'https://stallion-tau.vercel.app/',
      title: 'Stallion Technologies',
      description: 'Pick your E-bikes',
      images: [
        {
          url: '/logo.png', // Use the relative path to the image in the public folder
          width: 1200,
          height: 630,
          alt: 'Stallion Technologies',
        },
      ],
    }}
  />
);

export default SEO;
