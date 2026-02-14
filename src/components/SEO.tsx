import Head from 'next/head';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export const SEO = ({ title, description, canonical }: SEOProps) => {
  const siteUrl = "https://norcettestseries.com";
  const { pathname } = useLocation();
  const resolvedCanonical = canonical || pathname;
  return (
    <Head>
      <title>{title} | NPrep</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={`${siteUrl}${resolvedCanonical}`} />
    </Head>
  );
};
