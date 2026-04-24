import type { Metadata } from "next";
import Image from "next/image";
import { CarShowcase } from "../components/CarShowcase";
import { RoadAccent } from "../components/RoadAccent";
import { SectionHeader, SiteChrome } from "../components/SiteChrome";
import {
  buildBreadcrumbJsonLd,
  buildCollectionPageJsonLd,
  buildPageMetadata,
} from "../lib/seo";
import { cpamGuideSections } from "../site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Guide CPAM taxi conventionné | Taxi du Môle",
  description:
    "Guide pratique sur le taxi conventionné CPAM, la prise en charge, les remboursements, le tiers payant et les transports médicaux.",
  path: "/guide",
  keywords: [
    "guide CPAM taxi conventionné",
    "prise en charge taxi conventionné",
    "remboursement transport médical",
    "VSL ou taxi conventionné",
  ],
});

export default function GuidePage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Guide", path: "/guide" },
  ]);
  const collectionJsonLd = buildCollectionPageJsonLd({
    name: "Guide CPAM Taxi du Môle",
    description:
      "Guide pratique pour comprendre le transport médical, la prescription et le taxi conventionné.",
    path: "/guide",
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
          className="right-[-10%] top-[16%] h-[520px] w-[52%] opacity-[0.11]"
          imageClassName="object-right-center"
        />
        <SectionHeader
          copy="Guides & Questions, tout savoir sur les frais de transport, la prise en charge, les remboursements et le taxi conventionné pour vos trajets médicaux."
          eyebrow="Page 2"
          title="Guide CPAM"
        />

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="flex justify-center rounded-[30px] border border-black/10 bg-white p-6">
              <Image
                alt="Mascotte Taxi Du Môle"
                className="h-auto w-full max-w-[220px]"
                height={220}
                src="https://taxidumole.com/wp-content/uploads/2025/10/Logo-Mascote-Taxi-du-Mole-Image-8-oct.-2025-a-15_52_01.png"
                width={220}
              />
            </div>

            <div className="rounded-[30px] border border-black/10 bg-black p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/45">
                Guide
              </p>
              <h3 className="font-display mt-3 text-3xl font-semibold">
                Guides & Questions
              </h3>
              <p className="mt-4 text-base leading-8 text-white/75">
                Tout savoir sur les frais de transport, les conditions de prise
                en charge et les règles utiles pour un taxi conventionné.
              </p>
              <a
                className="mt-5 inline-flex rounded-full bg-[#ffb600] px-5 py-3 text-sm font-bold text-black hover:-translate-y-0.5"
                href="https://www.ameli.fr/assure/remboursements/rembourse/frais-transport"
                rel="noreferrer"
                target="_blank"
              >
                Tout Voir &rsaquo;
              </a>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#fff7db] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                Point Important
              </p>
              <p className="mt-4 text-base leading-8 text-black/70">
                Pour un transport médical en taxi conventionné, la règle de base
                reste la même : prescription médicale, situation ouvrant droit à
                la prise en charge et respect du mode de transport prescrit.
              </p>
            </div>

            <div className="flex justify-center rounded-[24px] border border-black/10 bg-white p-5">
              <Image
                alt="Illustration Guide CPAM"
                className="h-auto w-full max-w-[140px]"
                height={140}
                src="/cpam-guide-1.svg"
                unoptimized
                width={140}
              />
            </div>
            <CarShowcase carClassName="max-w-[260px]" />
          </div>

          <div className="space-y-4">
            {cpamGuideSections.map((section) => (
              <details
                key={section.title}
                className="group rounded-[30px] border border-black/10 bg-white p-6 open:bg-[#f8f6ee]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/40">
                      Guide CPAM
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">{section.title}</h3>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffb600] text-xl font-bold text-black transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="mt-5 space-y-4">
                  <p className="text-base leading-8 text-black/70">
                    {section.intro}
                  </p>
                  <div className="grid gap-3">
                    {section.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        className="rounded-[22px] border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-black/75"
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
