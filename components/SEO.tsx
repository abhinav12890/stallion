// components/SEO.tsx
"use client";

import { DefaultSeo } from 'next-seo';

const SEO = () => (
  <DefaultSeo
    openGraph={{
      type: 'website',
      url: 'https://your-website-url.com',
      title: 'Your Website Title',
      description: 'Your website description.',
      images: [
        {
          url: 'https://your-website-url.com/images/your-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Your Image Alt Text',
        },
      ],
    }}
  />
);

export default SEO;
