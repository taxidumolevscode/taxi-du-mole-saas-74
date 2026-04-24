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
import { hospitals } from "../site-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Hôpitaux et cliniques Haute-Savoie | Taxi du Môle",
  description:
    "Retrouvez les hôpitaux et cliniques desservis par Taxi du Môle en Haute-Savoie pour les transports médicaux conventionnés.",
  path: "/hopitaux",
  keywords: [
    "hôpitaux Haute-Savoie taxi conventionné",
    "clinique Annecy taxi",
    "CHAL taxi conventionné",
    "transport médical hôpital Haute-Savoie",
  ],
});

export default function HopitauxPage() {
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Hôpitaux", path: "/hopitaux" },
  ]);
  const collectionJsonLd = buildCollectionPageJsonLd({
    name: "Hôpitaux et cliniques desservis",
    description:
      "Collection des établissements hospitaliers et cliniques régulièrement desservis par Taxi du Môle.",
    path: "/hopitaux",
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
          className="bottom-[4%] left-[-10%] h-[320px] w-[44%] opacity-[0.14]"
          imageClassName="object-left-bottom"
        />
        <SectionHeader
          copy="Une page utile pour les patients, les proches et les établissements qui recherchent un taxi conventionné en Haute-Savoie. Le contenu ci-dessous reprend l'essentiel des informations de secteur avec une présentation plus claire."
          eyebrow="Page 3"
          title="Hôpitaux / Cliniques - Haute-Savoie (74)"
        />

        <div className="relative z-10 mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="flex justify-center rounded-[30px] border border-black/10 bg-[#fff7db] p-6">
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
                Aperçu Du Département
              </p>
              <p className="mt-4 text-lg leading-8 text-white/75">
                La Haute-Savoie compte 17 établissements de court séjour en
                médecine, chirurgie et obstétrique, dont 12 publics et 5 privés.
                Les principales implantations se situent autour d&apos;Annecy,
                Bonneville, Saint-Julien-en-Genevois et Thonon-les-Bains.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-black/10 bg-white p-5">
                <p className="text-sm text-black/55">Capacité</p>
                <p className="mt-2 text-3xl font-semibold">2 162 lits</p>
                <p className="mt-2 text-sm text-black/60">
                  Taux d&apos;équipement : 2,6 lits pour 1 000 habitants.
                </p>
              </div>
              <div className="rounded-[28px] border border-black/10 bg-[#fff7db] p-5">
                <p className="text-sm text-black/55">Activité Annuelle</p>
                <p className="mt-2 text-3xl font-semibold">123 341</p>
                <p className="mt-2 text-sm text-black/60">
                  Séjours hospitaliers toutes disciplines confondues.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {hospitals.map((hospital) => (
              <article
                key={hospital.name}
                className="rounded-[28px] border border-black/10 bg-white p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/40">
                  {hospital.city}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{hospital.name}</h3>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  {hospital.details}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative z-10 mt-8">
          <CarShowcase
            carClassName="max-w-[300px]"
            containerClassName="bg-white"
          />
        </div>
      </section>
    </SiteChrome>
  );
}
