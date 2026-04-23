import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CarShowcase } from "../components/CarShowcase";
import { RoadAccent } from "../components/RoadAccent";
import { SiteChrome } from "../components/SiteChrome";
import { ScrollToTop } from "./ScrollToTop";

export const metadata: Metadata = {
  title: "Demande envoyée | Taxi du Môle",
  description:
    "Votre demande de réservation a bien été prise en compte par Taxi du Môle. Nous revenons vers vous rapidement pour confirmation.",
};

export default function DemandeEnvoyeePage() {
  return (
    <SiteChrome>
      <ScrollToTop />
      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="right-[-8%] top-[10%] h-[320px] w-[46%] opacity-[0.12]"
          imageClassName="object-right-center"
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="flex justify-center">
            <Image
              alt="Logo Taxi du Môle"
              className="h-auto w-full max-w-[240px] md:max-w-[300px]"
              height={300}
              priority
              src="https://taxidumole.com/wp-content/uploads/2025/10/Logo-Mascote-Taxi-du-Mole-Image-8-oct.-2025-a-15_52_01.png"
              width={300}
            />
          </div>

          <div className="mt-8 rounded-[32px] border border-black/10 bg-[#f8f6ee] p-6 text-center shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),inset_-1px_-1px_0_rgba(17,17,17,0.05)] md:p-10">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#47c266] text-white shadow-[0_20px_38px_rgba(71,194,102,0.28)]">
              <svg
                aria-hidden="true"
                className="h-11 w-11"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M5 12.5L9.2 16.5L19 7.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.6"
                />
              </svg>
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.32em] text-black/45">
              Je Consulte Mon Agenda
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-black md:text-6xl">
              Demande Envoyée !
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
              Votre demande a bien été prise en compte. Nous vous contacterons
              dans les 2 prochaines heures pour confirmer votre trajet.
            </p>

            <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
              <div className="rounded-[24px] border border-black/10 bg-white p-5 text-left shadow-[0_14px_28px_rgba(17,17,17,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffb600]">
                  Étape 1
                </p>
                <p className="mt-3 text-lg font-semibold text-black">
                  Demande Reçue
                </p>
                <p className="mt-2 text-sm leading-7 text-black/60">
                  Votre formulaire a bien été transmis à Taxi du Môle.
                </p>
              </div>

              <div className="rounded-[24px] border border-black/10 bg-white p-5 text-left shadow-[0_14px_28px_rgba(17,17,17,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffb600]">
                  Étape 2
                </p>
                <p className="mt-3 text-lg font-semibold text-black">
                  Vérification Rapide
                </p>
                <p className="mt-2 text-sm leading-7 text-black/60">
                  Nous vérifions la disponibilité, l&apos;horaire et les détails du
                  trajet.
                </p>
              </div>

              <div className="rounded-[24px] border border-black/10 bg-white p-5 text-left shadow-[0_14px_28px_rgba(17,17,17,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#ffb600]">
                  Étape 3
                </p>
                <p className="mt-3 text-lg font-semibold text-black">
                  Retour Rapide
                </p>
                <p className="mt-2 text-sm leading-7 text-black/60">
                  Nous revenons vers vous rapidement pour finaliser la
                  confirmation.
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#ffb600] px-7 text-base font-bold text-black shadow-[0_18px_32px_rgba(255,182,0,0.32)] hover:-translate-y-0.5"
                href="tel:+33680423031"
              >
                Appeler Le 06 80 42 30 31
              </a>
              <Link
                className="inline-flex h-14 items-center justify-center rounded-full border border-black/10 bg-white px-7 text-base font-semibold text-black hover:-translate-y-0.5"
                href="/"
              >
                Retour À L&apos;Accueil
              </Link>
            </div>

            <div className="mt-8 rounded-[24px] border border-black/10 bg-white px-5 py-4 text-sm leading-7 text-black/60">
              Pensez à consulter également vos spams ou courriers indésirables si
              vous attendez une réponse par email.
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <CarShowcase
              carClassName="max-w-[320px]"
              containerClassName="w-full max-w-[440px]"
            />
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
