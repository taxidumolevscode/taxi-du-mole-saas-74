import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CarShowcase } from "../../components/CarShowcase";
import { ContactReservationForm } from "../../components/ContactReservationForm";
import { RoadAccent } from "../../components/RoadAccent";
import { SectionHeader, SiteChrome } from "../../components/SiteChrome";
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildLocalBusinessJsonLd,
  buildPageMetadata,
  getSiteUrl,
} from "../../lib/seo";
import { getMedicalCityBySlug, medicalCities } from "../../medical-cities";
import { routePages } from "../../route-data";

type CityPageProps = {
  params: Promise<{ slug: string }>;
};

function buildCityKeywords(city: NonNullable<ReturnType<typeof getMedicalCityBySlug>>) {
  return [
    `taxi conventionné ${city.label}`,
    `taxi CPAM ${city.label}`,
    `transport médical ${city.label}`,
    `VSL ${city.label}`,
    `taxi médical ${city.label}`,
    ...city.nearbyAreas.map((area) => `taxi conventionné ${area}`),
    ...city.hospitals.slice(0, 3).map((hospital) => `${city.label} ${hospital}`),
  ];
}

export function generateStaticParams() {
  return medicalCities.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getMedicalCityBySlug(slug);

  if (!city) {
    return {};
  }

  return buildPageMetadata({
    title: `${city.title} | Taxi du Môle`,
    description: city.description,
    path: `/ville/${city.slug}`,
    keywords: buildCityKeywords(city),
  });
}

export default async function CityPage({ params }: CityPageProps) {
  const { slug } = await params;
  const city = getMedicalCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const cityUrl = `${siteUrl}/ville/${city.slug}`;
  const relatedCities = city.nearbyAreas
    .map((area) =>
      medicalCities.find(
        (candidate) => candidate.label.toLowerCase() === area.toLowerCase(),
      ),
    )
    .filter((candidate): candidate is (typeof medicalCities)[number] => Boolean(candidate))
    .slice(0, 4);
  const relatedRoutes = routePages
    .filter((route) => route.fromSlug === city.slug || route.toSlug === city.slug)
    .slice(0, 4);

  const directAnswers = [
    {
      question: `Comment réserver un taxi conventionné à ${city.label} ?`,
      answer: `Pour réserver depuis ${city.label}, il suffit d'indiquer votre adresse de départ, votre établissement de destination, la date du rendez-vous et votre situation médicale afin d'organiser une prise en charge adaptée.`,
    },
    {
      question: `Le tiers payant est-il possible depuis ${city.label} ?`,
      answer: `Le tiers payant peut être mis en place selon votre dossier, la prescription médicale et les conditions de prise en charge applicables à votre transport.`,
    },
    {
      question: `Quelles destinations médicales sont fréquemment desservies depuis ${city.label} ?`,
      answer: `Depuis ${city.label}, les trajets peuvent concerner les hôpitaux et cliniques de Haute-Savoie ainsi que des centres spécialisés plus éloignés selon votre parcours de soins.`,
    },
  ];

  const faqJsonLd = buildFaqJsonLd(city.faq);

  const localBusinessJsonLd = buildLocalBusinessJsonLd({
    url: cityUrl,
    areaServed: [city.label, ...city.nearbyAreas, "Haute-Savoie"],
    serviceType: [
      "Taxi conventionné CPAM",
      "Transport médical assis",
      "VSL",
      "Transport vers hôpitaux et cliniques",
    ],
  });

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Villes", path: "/ville" },
    { name: city.label, path: `/ville/${city.slug}` },
  ]);

  return (
    <SiteChrome>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
        type="application/ld+json"
      />
      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="bottom-[-6%] right-[-8%] h-[320px] w-[46%] opacity-[0.12]"
          imageClassName="object-right-bottom"
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

        <div className="mt-4">
          <SectionHeader
            eyebrow="Ville"
            title={city.title}
            copy={city.description}
          />
        </div>

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <div className="rounded-[30px] border border-black/10 bg-[#fff7db] p-6 shadow-[0_16px_34px_rgba(255,182,0,0.16)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                Réserver Un Taxi Conventionné
              </p>
              <p className="mt-4 text-base leading-8 text-black/75">
                {city.intro}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#ffb600] px-6 text-sm font-bold text-black shadow-[0_14px_28px_rgba(255,182,0,0.24)] hover:-translate-y-0.5"
                  href="#reservation-ville"
                >
                  Réserver Un Taxi Conventionné
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black hover:-translate-y-0.5"
                  href="tel:+33680423031"
                >
                  06 80 42 30 31
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
                Taxi VSL Conventionné
              </p>
              <p className="mt-4 text-base leading-8 text-black/72">
                Un taxi conventionné CPAM s&apos;adresse aux patients ayant besoin d&apos;un
                transport assis professionnalisé dans le cadre d&apos;une prescription
                médicale. Selon la situation, les frais peuvent être pris en
                charge à 55 % ou à 100 %, avec un fonctionnement clair et un
                accompagnement rassurant pour chaque trajet.
              </p>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-black p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
                Pourquoi Choisir Taxi Du Môle
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Transport conventionné CPAM avec organisation claire du dossier.",
                  "Ponctualité, confort et accompagnement adapté au transport médical assis.",
                  "Connaissance des trajets de Haute-Savoie, du CHAL, des cliniques et des grands centres hospitaliers.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm leading-7 text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
                Réponses Rapides
              </p>
              <div className="mt-5 grid gap-3">
                {directAnswers.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-[22px] border border-black/10 bg-[#f8f6ee] px-4 py-4"
                  >
                    <h2 className="text-base font-semibold text-black">
                      {item.question}
                    </h2>
                    <p className="mt-2 text-sm leading-7 text-black/72">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[30px] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
                {city.localHeading}
              </p>
              <div className="mt-4 space-y-4">
                {city.localCopy.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-black/72">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
                Secteurs Proches
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {city.nearbyAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-black/10 bg-[#f8f6ee] px-4 py-2 text-sm font-semibold text-black/72"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#fff7db] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                Établissements Régulièrement Desservis
              </p>
              <div className="mt-4 grid gap-3">
                {city.hospitals.map((hospital) => (
                  <div
                    key={hospital}
                    className="rounded-[20px] border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-black/75"
                  >
                    {hospital}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
                Liens Utiles
              </p>
              <div className="mt-4 grid gap-3">
                <Link
                  className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                  href="/guide"
                >
                  Voir Le Guide CPAM
                </Link>
                <Link
                  className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                  href="/hopitaux"
                >
                  Consulter Les Hôpitaux & Cliniques
                </Link>
                <Link
                  className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                  href="/ville"
                >
                  Voir Toutes Les Villes
                </Link>
                {relatedCities.map((relatedCity) => (
                  <Link
                    key={relatedCity.slug}
                    className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                    href={`/ville/${relatedCity.slug}`}
                  >
                    Taxi conventionné à {relatedCity.label}
                  </Link>
                ))}
                {relatedRoutes.map((route) => (
                  <Link
                    key={route.slug}
                    className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                    href={`/trajet/${route.slug}`}
                  >
                    Taxi {route.from} vers {route.to}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="left-[-8%] top-[8%] h-[300px] w-[42%] opacity-[0.12]"
          imageClassName="object-left-top"
        />

        <div className="relative z-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[30px] border border-black/10 bg-black p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
              F.A.Q.
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold">
              Questions fréquentes pour {city.label}
            </h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              Faites confiance à Taxi du Môle pour vos transports médicaux
              conventionnés CPAM, vos consultations, vos soins réguliers et vos
              trajets vers les établissements de santé de Haute-Savoie.
            </p>
          </div>

          <div className="space-y-4">
            {city.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-[28px] border border-black/10 bg-white p-6 open:bg-[#f8f6ee]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span className="flex h-10 min-h-10 w-10 min-w-10 shrink-0 items-center justify-center rounded-2xl bg-[#ffb600] text-xl font-bold text-black transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-8 text-black/72">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reservation-ville"
        className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8"
      >
        <SectionHeader
          eyebrow="Réserver Une Course"
          title={`Réserver Votre Taxi Conventionné Depuis ${city.label}`}
          copy="Envoyez votre demande en quelques instants. Nous revenons vers vous rapidement avec une réponse claire, adaptée à votre trajet médical."
        />

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="flex h-full flex-col gap-4">
            <div className="rounded-[30px] border border-black/10 bg-[#fff7db] p-6 shadow-[0_18px_38px_rgba(255,182,0,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                Infos Utiles
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  "Conventionné pour toute la Haute-Savoie",
                  "Réponse rapide pour vos demandes de trajet médical",
                  "Contact direct : 06 80 42 30 31",
                  "Email : contact@taxidumole.com",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-black/75"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <a
              aria-label="Appeler Taxi du Môle"
              className="relative block min-h-[320px] flex-1 overflow-hidden rounded-[30px] border border-black/10 bg-[#fff7db] p-4 shadow-[0_18px_38px_rgba(255,182,0,0.12)] hover:-translate-y-0.5"
              href="tel:+33680423031"
            >
              <Image
                alt="Visuel Taxi du Môle"
                className="h-full w-full object-contain object-center"
                fill
                sizes="(min-width: 1280px) 40vw, 100vw"
                src="https://taxidumole.com/wp-content/uploads/2025/12/ChatGPT-Image-2-dec.-2025-a-22_52_33.png"
              />
            </a>
          </div>

          <ContactReservationForm />
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
