import Image from "next/image";
import { CarShowcase } from "./components/CarShowcase";
import { ContactReservationForm } from "./components/ContactReservationForm";
import { RoadAccent } from "./components/RoadAccent";
import { SectionHeader, SiteChrome } from "./components/SiteChrome";
import {
  heroBenefitCards,
  heroTrustBadges,
  processSteps,
} from "./site-data";

export default function Home() {
  return (
    <SiteChrome>
      <section
        id="hero"
        className="relative grid gap-6 overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8 2xl:grid-cols-[1.15fr_0.85fr]"
      >
        <RoadAccent
          className="bottom-[-4%] right-[-8%] h-[280px] w-[48%] opacity-[0.16] md:h-[360px]"
          imageClassName="object-right-bottom"
        />
        <div className="rounded-[30px] bg-[#f8f6ee] p-6 shadow-[inset_1px_1px_0_rgba(255,255,255,0.92),inset_-1px_-1px_0_rgba(17,17,17,0.05)] md:p-8">
          <div className="hidden flex-wrap justify-center gap-3 md:flex">
            {heroTrustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-black/10 bg-white/90 px-4 py-2 text-sm font-semibold text-black/78 shadow-[0_10px_20px_rgba(255,182,0,0.12)]"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-7 flex justify-center">
            <Image
              alt="Logo Taxi Du Môle"
              className="h-auto w-full max-w-[340px] md:max-w-[430px]"
              height={430}
              priority
              src="https://taxidumole.com/wp-content/uploads/2025/10/Logo-Mascote-Taxi-du-Mole-Image-8-oct.-2025-a-15_52_01.png"
              width={430}
            />
          </div>
          <p className="mt-7 text-center text-sm font-semibold uppercase tracking-[0.34em] text-black/45">
            Haute-Savoie 74
          </p>
          <h1 className="marketing-title marketing-title-center font-display mt-4 text-center text-4xl font-semibold leading-[1.04] md:text-6xl">
            Taxi Du Môle, Votre Taxi Conventionné Longue Distance Vers
            l&apos;Hôpital De Votre Choix.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-black/65">
            Taxi du Môle est votre partenaire de confiance pour vos transferts
            médicalisés assis vers les hôpitaux de Lyon, Grenoble et partout en
            France.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#ffb600] px-7 text-base font-bold text-black shadow-[0_18px_32px_rgba(255,182,0,0.32)] hover:-translate-y-0.5"
              href="#hero-form"
            >
              Reserver Maintenant
            </a>
            <a
              className="inline-flex h-14 items-center justify-center rounded-full border border-black/10 bg-white px-7 text-base font-semibold text-black hover:-translate-y-0.5"
              href="/guide"
            >
              Voir Le Guide CPAM
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {heroBenefitCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[24px] border border-black/10 bg-white p-5"
              >
                <p className="text-sm text-black/55">{card.title}</p>
                <p className="mt-2 text-base font-semibold leading-7">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="hero-form" className="relative z-10 space-y-4">
          <ContactReservationForm />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border border-black/10 bg-black p-5 text-white shadow-[0_24px_50px_rgba(17,17,17,0.16)]">
              <p className="text-xl font-semibold">
                Demande Claire, Réponse Rapide, Confirmation Simple.
              </p>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-[#ffb600] p-5 shadow-[0_18px_36px_rgba(255,182,0,0.22)]">
              <p className="text-xl font-semibold text-black">
                Taxi Conventionné, Assistance Et Trajets Médicalisés Assis.
              </p>
            </div>
          </div>
          <CarShowcase carClassName="max-w-[340px]" />
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="bottom-[-8%] left-[-10%] h-[250px] w-[46%] opacity-[0.12] md:h-[320px]"
          imageClassName="object-left-bottom"
        />
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-black bg-[#ffb600] px-4 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-black shadow-[0_10px_22px_rgba(255,182,0,0.22)]">
            Comment Ca Marche
          </p>
          <h2 className="marketing-title marketing-title-center font-display mt-6 text-4xl font-semibold leading-[1.06] text-black md:text-6xl">
            Un Processus Simple En <span className="text-[#ffb600]">6 Etapes.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/65">
            De la demande à la réservation de votre taxi, nous gérons chaque étape
            pour vous offrir un parcours simple, clair et parfaitement adapté au
            transport médical.
          </p>
        </div>

        <div className="relative z-10 mt-10 grid gap-5 xl:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.step}
              className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_16px_36px_rgba(17,17,17,0.06)]"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#e58d00] text-sm font-bold text-white shadow-[0_14px_24px_rgba(229,141,0,0.26)]"
                >
                  {step.step}
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/35">
                    {step.step}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-black/55">
                    {step.badge}
                  </p>
                </div>
              </div>
              <h3 className="font-display mt-6 text-3xl font-semibold leading-tight text-black">
                {step.title}
              </h3>
              <p className="mt-4 text-lg leading-8 text-black/65">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8"
      >
        <RoadAccent
          className="right-[-8%] top-[18%] h-[340px] w-[54%] opacity-[0.12] md:h-[420px]"
          imageClassName="object-right-center"
        />
        <SectionHeader
          copy="Vous nous envoyez votre demande en quelques instants, nous revenons vers vous rapidement avec une réponse claire, adaptée à votre trajet et à votre situation."
          eyebrow="Page 1"
          title="Contactez-Nous"
        />

        <div className="relative z-10 mt-8">
          <div className="grid gap-4 lg:max-w-[760px] sm:grid-cols-2">
            <div className="flex min-h-[150px] flex-col justify-between rounded-[28px] border border-black/10 bg-[#fff7db] p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[#ffb600] text-black shadow-[0_10px_18px_rgba(255,182,0,0.22)]">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6.8 4.5H9.7L11.1 8.2L9.4 9.9C10.1 11.3 11.2 12.5 12.7 13.3L14.3 11.7L18 13.1V16C18 16.8 17.3 17.5 16.5 17.5C9.9 17.1 6.9 14.1 6.5 7.5C6.5 6.7 7.2 6 8 6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-sm text-black/55">Telephone Direct</p>
              </div>
              <a
                className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-black bg-white px-4 py-3 text-center text-[1.45rem] font-semibold leading-none tracking-[-0.03em] whitespace-nowrap text-black shadow-[0_10px_22px_rgba(17,17,17,0.06)] hover:-translate-y-0.5 sm:text-[1.65rem]"
                href="tel:+33680423031"
              >
                06 80 42 30 31
              </a>
            </div>
            <div className="flex min-h-[150px] flex-col justify-between rounded-[28px] border border-black/10 bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-[#ffb600] text-black shadow-[0_10px_18px_rgba(255,182,0,0.22)]">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 7.5H20V16.5H4V7.5Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M4 8L12 13.5L20 8"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <p className="text-sm text-black/55">Email</p>
              </div>
              <a
                className="mt-4 block text-[1.1rem] font-semibold leading-8 tracking-[-0.02em] sm:text-[1.22rem]"
                href="mailto:contact@taxidumole.com"
              >
                contact@taxidumole.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
