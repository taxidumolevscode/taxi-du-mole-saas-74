import Image from "next/image";
import Link from "next/link";
import { SiteChrome } from "../components/SiteChrome";

export default function DemandeEnvoyeePage() {
  return (
    <SiteChrome>
      <section className="rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-black/10 bg-[#f8f6ee] p-6 text-center shadow-[inset_1px_1px_0_rgba(255,255,255,0.88),inset_-1px_-1px_0_rgba(17,17,17,0.05)] md:p-10">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#ffb600] text-black shadow-[0_18px_34px_rgba(255,182,0,0.28)]">
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

          <div className="mt-8 flex justify-center">
            <Image
              alt="Logo Taxi du Môle"
              className="h-auto w-full max-w-[260px]"
              height={260}
              priority
              src="https://taxidumole.com/wp-content/uploads/2025/10/Logo-Mascote-Taxi-du-Mole-Image-8-oct.-2025-a-15_52_01.png"
              width={260}
            />
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-black/45">
            Demande Confirmée
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-black md:text-6xl">
            Demande Envoyée !
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black/65 md:text-xl">
            Votre demande a été envoyée avec succès. Nous vous contacterons dans
            les 2 prochaines heures.
          </p>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-black/10 bg-white p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb600]">
                Étape 1
              </p>
              <p className="mt-3 text-base font-semibold text-black">
                Demande Bien Reçue
              </p>
              <p className="mt-2 text-sm leading-7 text-black/60">
                Votre réservation est enregistrée et transmise directement.
              </p>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-white p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb600]">
                Étape 2
              </p>
              <p className="mt-3 text-base font-semibold text-black">
                Analyse Rapide
              </p>
              <p className="mt-2 text-sm leading-7 text-black/60">
                Nous vérifions la disponibilité, l’horaire et le trajet demandé.
              </p>
            </div>
            <div className="rounded-[24px] border border-black/10 bg-white p-5 text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffb600]">
                Étape 3
              </p>
              <p className="mt-3 text-base font-semibold text-black">
                Retour Sous 2 Heures
              </p>
              <p className="mt-2 text-sm leading-7 text-black/60">
                Un contact rapide est effectué pour confirmer votre demande.
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

          <p className="mt-8 text-sm leading-7 text-black/55">
            Pensez à consulter également vos spams ou courriers indésirables si
            vous attendez une réponse par email.
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
