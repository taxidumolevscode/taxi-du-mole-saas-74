import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CarShowcase } from "../components/CarShowcase";
import { RoadAccent } from "../components/RoadAccent";
import { SiteChrome } from "../components/SiteChrome";
import { medicalCityLinks } from "../medical-cities";

export const metadata: Metadata = {
  title: "Villes desservies | Taxi conventionné CPAM Haute-Savoie | Taxi du Môle",
  description:
    "Consultez les villes desservies par Taxi du Môle pour les transports médicaux conventionnés CPAM en Haute-Savoie.",
};

export default function VilleIndexPage() {
  return (
    <SiteChrome>
      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="right-[-8%] top-[12%] h-[360px] w-[52%] opacity-[0.11]"
          imageClassName="object-right-center"
        />
        <div className="relative z-10 flex justify-end">
          <Image
            alt="Logo Taxi du Môle"
            className="h-auto w-full max-w-[150px] md:max-w-[180px]"
            height={180}
            priority
            src="https://taxidumole.com/wp-content/uploads/2025/10/Logo-Mascote-Taxi-du-Mole-Image-8-oct.-2025-a-15_52_01.png"
            width={180}
          />
        </div>

        <div className="mt-4 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-black/45">
            Ville
          </p>
          <h1 className="font-display mt-4 text-3xl font-semibold leading-[1.06] text-black md:text-5xl xl:text-[3.35rem]">
            Nos Pages Locales En Haute-Savoie
          </h1>
          <p className="mt-4 max-w-4xl text-base leading-8 text-black/65 md:text-lg">
            Retrouvez les villes desservies par Taxi du Môle pour les transports
            médicaux conventionnés CPAM, les trajets vers hôpitaux, cliniques et
            centres de soins.
          </p>
        </div>

        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {medicalCityLinks.map((city) => (
            <Link
              key={city.href}
              className="rounded-[28px] border border-black/10 bg-white px-5 py-5 text-lg font-semibold shadow-[0_14px_30px_rgba(17,17,17,0.05)] hover:-translate-y-0.5"
              href={city.href}
            >
              {city.label}
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
