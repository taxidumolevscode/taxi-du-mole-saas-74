import type { Metadata } from "next";
import Link from "next/link";
import { CarShowcase } from "../components/CarShowcase";
import { RoadAccent } from "../components/RoadAccent";
import { SectionHeader, SiteChrome } from "../components/SiteChrome";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildPageMetadata,
} from "../lib/seo";
import { routePages } from "../route-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Trajets taxi Haute-Savoie | Genève, Annecy, Lyon | Taxi du Môle",
  description:
    "Consultez les pages trajets de Taxi du Môle pour les liaisons locales et longue distance au départ de Haute-Savoie, vers Genève, Annecy, Lyon et les centres de soins.",
  path: "/trajet",
  keywords: [
    "trajets taxi Haute-Savoie",
    "taxi Bonneville Genève",
    "taxi Cluses Annecy",
    "taxi Annecy aéroport Genève",
    "transport médical longue distance",
  ],
});

export default function TrajetIndexPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Trajets", path: "/trajet" },
  ]);
  const collectionJsonLd = buildCollectionPageJsonLd({
    name: "Trajets Taxi du Môle",
    description:
      "Collection de pages trajets pour les liaisons fréquentes au départ de Haute-Savoie.",
    path: "/trajet",
  });

  return (
    <SiteChrome>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        type="application/ld+json"
      />

      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="right-[-8%] top-[12%] h-[360px] w-[52%] opacity-[0.11]"
          imageClassName="object-right-center"
        />
        <SectionHeader
          eyebrow="Trajets"
          title="Nos pages trajets en Haute-Savoie"
          copy="Cette page hub relie les liaisons les plus recherchées pour capter les requêtes locales précises, améliorer le maillage interne et proposer des réponses directes aux internautes comme aux IA."
        />

        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {routePages.map((route) => (
            <Link
              key={route.slug}
              className="rounded-[28px] border border-black/10 bg-white px-5 py-5 shadow-[0_14px_30px_rgba(17,17,17,0.05)] hover:-translate-y-0.5"
              href={`/trajet/${route.slug}`}
            >
              <p className="text-sm uppercase tracking-[0.22em] text-black/40">
                {route.from}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{route.to}</h2>
              <p className="mt-3 text-sm leading-7 text-black/68">
                {route.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="relative z-10 mt-8 flex justify-center">
          <CarShowcase
            carClassName="max-w-[300px]"
            containerClassName="w-full max-w-[420px]"
          />
        </div>
      </section>
    </SiteChrome>
  );
}
