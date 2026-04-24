import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { getRoutePageBySlug, routePages } from "../../route-data";
import { hospitals } from "../../site-data";

type RoutePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return routePages.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({
  params,
}: RoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRoutePageBySlug(slug);

  if (!route) {
    return {};
  }

  return buildPageMetadata({
    title: `${route.title} | Taxi du Môle`,
    description: route.description,
    path: `/trajet/${route.slug}`,
    keywords: route.keywords,
  });
}

export default async function RoutePage({ params }: RoutePageProps) {
  const { slug } = await params;
  const route = getRoutePageBySlug(slug);

  if (!route) {
    notFound();
  }

  const fromCity = route.fromSlug ? getMedicalCityBySlug(route.fromSlug) : undefined;
  const toCity = route.toSlug ? getMedicalCityBySlug(route.toSlug) : undefined;
  const relatedCities = medicalCities
    .filter(
      (city) =>
        city.slug === route.fromSlug ||
        city.slug === route.toSlug ||
        route.nearbyStarts.some(
          (start) => start.toLowerCase() === city.label.toLowerCase(),
        ),
    )
    .slice(0, 5);
  const relatedRoutes = routePages
    .filter(
      (candidate) =>
        candidate.slug !== route.slug &&
        (candidate.from === route.from || candidate.to === route.to),
    )
    .slice(0, 4);
  const relatedHospitals = hospitals.filter(
    (hospital) =>
      route.relatedHospitalNames.includes(hospital.name) ||
      hospital.city.toLowerCase() === route.from.toLowerCase() ||
      hospital.city.toLowerCase() === route.to.toLowerCase(),
  );
  const siteUrl = getSiteUrl();
  const routeUrl = `${siteUrl}/trajet/${route.slug}`;

  const faqJsonLd = buildFaqJsonLd(route.faq);
  const localBusinessJsonLd = buildLocalBusinessJsonLd({
    url: routeUrl,
    areaServed: [route.from, route.to, ...route.nearbyStarts],
    serviceType: [
      "Taxi longue distance",
      "Taxi local",
      "Transport médical assis",
      "Taxi conventionné",
    ],
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Trajets", path: "/trajet" },
    { name: `${route.from} vers ${route.to}`, path: `/trajet/${route.slug}` },
  ]);

  return (
    <SiteChrome>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        type="application/ld+json"
      />

      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="right-[-8%] top-[8%] h-[340px] w-[48%] opacity-[0.12]"
          imageClassName="object-right-top"
        />
        <SectionHeader
          eyebrow="Trajet"
          title={route.title}
          copy={route.description}
        />

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
          <div className="space-y-4">
            <div className="rounded-[30px] border border-black/10 bg-[#fff7db] p-6 shadow-[0_16px_34px_rgba(255,182,0,0.16)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                Réserver ce trajet
              </p>
              <p className="mt-4 text-base leading-8 text-black/75">
                {route.intro}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#ffb600] px-6 text-sm font-bold text-black shadow-[0_14px_28px_rgba(255,182,0,0.24)] hover:-translate-y-0.5"
                  href="#reservation-trajet"
                >
                  Réserver mon taxi
                </a>
                <a
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/10 bg-white px-6 text-sm font-semibold text-black hover:-translate-y-0.5"
                  href="tel:+33680423031"
                >
                  06 80 42 30 31
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-black p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
                Pourquoi ce trajet est demandé
              </p>
              <div className="mt-5 grid gap-3">
                {route.benefits.map((item) => (
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
                Réponses directes
              </p>
              <div className="mt-5 grid gap-3">
                {route.voiceAnswers.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-[22px] border border-black/10 bg-[#f8f6ee] px-4 py-4"
                  >
                    <h2 className="text-base font-semibold">{item.question}</h2>
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
                Départs couverts autour de {route.from}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[route.from, ...route.nearbyStarts].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-[#f8f6ee] px-4 py-2 text-sm font-semibold text-black/72"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {relatedHospitals.length > 0 ? (
              <div className="rounded-[30px] border border-black/10 bg-[#fff7db] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                  Établissements liés à ce trajet
                </p>
                <div className="mt-4 grid gap-3">
                  {relatedHospitals.map((hospital) => (
                    <div
                      key={hospital.name}
                      className="rounded-[20px] border border-black/10 bg-white px-4 py-4 text-sm leading-7 text-black/75"
                    >
                      {hospital.name} - {hospital.city}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="rounded-[30px] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
                Liens utiles
              </p>
              <div className="mt-4 grid gap-3">
                <Link
                  className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                  href="/guide"
                >
                  Voir le guide CPAM
                </Link>
                <Link
                  className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                  href="/hopitaux"
                >
                  Voir les hôpitaux et cliniques
                </Link>
                <Link
                  className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                  href="/trajet"
                >
                  Voir tous les trajets
                </Link>
                {fromCity ? (
                  <Link
                    className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                    href={`/ville/${fromCity.slug}`}
                  >
                    Taxi conventionné à {fromCity.label}
                  </Link>
                ) : null}
                {toCity ? (
                  <Link
                    className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                    href={`/ville/${toCity.slug}`}
                  >
                    Taxi conventionné à {toCity.label}
                  </Link>
                ) : null}
                {relatedCities
                  .filter((city) => city.slug !== fromCity?.slug && city.slug !== toCity?.slug)
                  .map((city) => (
                    <Link
                      key={city.slug}
                      className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                      href={`/ville/${city.slug}`}
                    >
                      Départ proche : {city.label}
                    </Link>
                  ))}
                {relatedRoutes.map((candidate) => (
                  <Link
                    key={candidate.slug}
                    className="rounded-[20px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold text-black hover:-translate-y-0.5"
                    href={`/trajet/${candidate.slug}`}
                  >
                    Taxi {candidate.from} vers {candidate.to}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <div className="relative z-10 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[30px] border border-black/10 bg-black p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#ffb600]">
              Questions fréquentes
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold">
              FAQ pour {route.from} vers {route.to}
            </h2>
            <p className="mt-4 text-base leading-8 text-white/75">
              Cette section répond rapidement aux questions les plus fréquentes
              sur ce trajet, avec un contenu clair, lisible et exploitable par
              les moteurs comme par les assistants IA.
            </p>
          </div>

          <div className="space-y-4">
            {route.faq.map((item) => (
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
        id="reservation-trajet"
        className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8"
      >
        <SectionHeader
          eyebrow="Réservation"
          title={`Réserver un taxi de ${route.from} vers ${route.to}`}
          copy="Envoyez votre demande en quelques instants. Nous revenons vers vous rapidement avec une réponse claire, adaptée à votre horaire, votre destination et votre situation."
        />
        <div className="relative z-10 mt-8">
          <ContactReservationForm />
        </div>
      </section>
    </SiteChrome>
  );
}
