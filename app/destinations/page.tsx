import Image from "next/image";
import { CarShowcase } from "../components/CarShowcase";
import { RoadAccent } from "../components/RoadAccent";
import { SectionHeader, SiteChrome } from "../components/SiteChrome";
import {
  destinationHighlights,
  destinationKeywords,
  seoByClient,
  seoByRoute,
} from "../site-data";

export default function DestinationsPage() {
  return (
    <SiteChrome>
      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="bottom-[6%] left-[2%] h-[320px] w-[40%] opacity-[0.12]"
          imageClassName="object-left-bottom"
        />
        <RoadAccent
          className="bottom-[6%] right-[-8%] h-[320px] w-[48%] opacity-[0.12]"
          imageClassName="object-right-bottom"
          blendClassName="mix-blend-screen"
        />
        <SectionHeader
          copy="Une page destination orientée longue distance et transport conventionné avec carte, bénéfices lisibles et vocabulaire de recherche reformulé pour rester utile, naturel et crédible."
          eyebrow="Page 4"
          title="Types De Destination"
        />

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[34px] border border-black/10 bg-[#fff7db] p-4 shadow-[0_18px_44px_rgba(255,182,0,0.16)]">
            <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white p-4">
              <Image
                alt="Carte de France des destinations médicales"
                className="h-auto w-full rounded-[24px]"
                height={768}
                priority
                src="/france-medical-map.jpeg"
                width={1024}
              />
            </div>
            <div className="mt-4 flex justify-center rounded-[24px] border border-black/10 bg-white p-5">
              <Image
                alt="Mascotte Taxi Du Môle"
                className="h-auto w-full max-w-[200px]"
                height={200}
                src="https://taxidumole.com/wp-content/uploads/2025/10/Logo-Mascote-Taxi-du-Mole-Image-8-oct.-2025-a-15_52_01.png"
                width={200}
              />
            </div>
          </div>

          <div className="space-y-4">
            {destinationHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-black/10 bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffb600] text-lg font-bold text-black">
                    N
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item}</h3>
                    <p className="mt-2 text-sm leading-7 text-black/65">
                      Organisation claire pour les trajets vers Lyon, Grenoble,
                      Annecy, Genève et d&apos;autres destinations sur demande.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-black/10 bg-white p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
              Nous Pouvons Vous Proposer
            </p>
            <p className="mt-4 text-base leading-8 text-black/65">
              Selon votre situation, nous pouvons vous orienter vers une solution
              de transport adaptée autour de Bonneville, de la Haute-Savoie et
              des grands trajets médicaux.
            </p>
            <div className="mt-5 grid gap-3">
              {[...seoByClient, ...seoByRoute].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-black/10 bg-[#f8f6ee] px-4 py-3 text-sm leading-7 text-black/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-black p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/45">
              Requetes Cibles
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {destinationKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2 text-sm text-white/80"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-8">
          <CarShowcase carClassName="max-w-[320px]" />
        </div>
      </section>
    </SiteChrome>
  );
}
