import type { Metadata } from "next";

const siteUrl = "https://taxidumole.fr";
const businessName = "Taxi du Môle";
const businessPhone = "+33680423031";
const businessEmail = "contact@taxidumole.com";
const mascotLogoUrl =
  "https://taxidumole.com/wp-content/uploads/2025/10/Logo-Mascote-Taxi-du-Mole-Image-8-oct.-2025-a-15_52_01.png";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

type FaqItem = {
  question: string;
  answer: string;
};

type LocalBusinessInput = {
  url: string;
  areaServed: string[];
  serviceType: string[];
};

export function getSiteUrl() {
  return siteUrl;
}

export function getBusinessProfile() {
  return {
    businessName,
    businessPhone,
    businessEmail,
    mascotLogoUrl,
  };
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: MetadataInput): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: businessName,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: mascotLogoUrl,
          width: 512,
          height: 512,
          alt: `Logo ${businessName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [mascotLogoUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildLocalBusinessJsonLd({
  url,
  areaServed,
  serviceType,
}: LocalBusinessInput) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    image: mascotLogoUrl,
    url,
    telephone: businessPhone,
    email: businessEmail,
    areaServed,
    serviceType,
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function buildCollectionPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: `${siteUrl}${path}`,
  };
}
