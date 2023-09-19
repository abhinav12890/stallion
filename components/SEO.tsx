// components/SEO.tsx
"use client";
// components/SEO.tsx
import { DefaultSeo } from 'next-seo';

// Define a TypeScript interface for props
interface SEOProps {
  metadata: {
    title: string;
    description: string;
    image: string;
  };
}

const SEO = ({ metadata }: SEOProps) => (
  <DefaultSeo
    openGraph={{
      type: 'website',
      url: 'https://stallion-tau.vercel.app/',
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: metadata.image,
          width: 1200,
          height: 630,
          alt: 'Your Image Alt Text', // Provide a suitable alt text
        },
      ],
    }}
  />
);

export default SEO;
