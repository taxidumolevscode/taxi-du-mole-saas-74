"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "../site-data";
import { medicalCityLinks } from "../medical-cities";

function LogoBadge() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-[#ffb600] shadow-[8px_8px_18px_rgba(17,17,17,0.14),-8px_-8px_18px_rgba(255,255,255,0.88)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-[16px] bg-black">
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-[#ffb600]"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 11.5L12 5L20 11.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
          <path
            d="M6.5 10.5V18.5H17.5V10.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
          <path
            d="M10 18.5V14H14V18.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </svg>
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-black/45">
        {eyebrow}
      </p>
      <h2 className="font-display mt-4 text-3xl font-semibold leading-tight text-black md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-black/65 md:text-lg">{copy}</p>
    </div>
  );
}

function CityDropdownLinks({
  className,
  itemClassName,
  onClick,
}: {
  className: string;
  itemClassName: string;
  onClick?: () => void;
}) {
  return (
    <div className={className}>
      <Link
        className={itemClassName}
        href="/ville"
        onClick={onClick}
      >
        Toutes Les Villes
      </Link>
      {medicalCityLinks.map((city) => (
        <Link
          key={city.href}
          className={itemClassName}
          href={city.href}
          onClick={onClick}
        >
          {city.label}
        </Link>
      ))}
    </div>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <main className="relative min-h-screen overflow-hidden text-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-12 h-72 w-72 rounded-full bg-[#ffb600]/20 blur-3xl" />
        <div className="absolute right-[-4%] top-56 h-60 w-60 rounded-full bg-black/[0.08] blur-3xl" />
        <div className="absolute bottom-32 left-1/3 h-80 w-80 rounded-full bg-white/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-50 rounded-[30px] border border-white/60 bg-white/70 px-4 py-4 shadow-[0_18px_45px_rgba(17,17,17,0.08)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <Link className="flex min-w-0 items-center gap-3 sm:gap-4" href="/#hero">
              <LogoBadge />
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold whitespace-nowrap sm:text-xl">
                  Taxi Du Môle
                </p>
                <p className="text-sm text-black/55">Haute-Savoie 74 • 24h/24</p>
              </div>
            </Link>

            <div className="hidden items-center gap-3 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="relative overflow-hidden rounded-full border border-black bg-[#ffb600] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(255,182,0,0.28),0_3px_8px_rgba(17,17,17,0.08),inset_0_1px_0_rgba(255,245,199,0.95)] before:absolute before:inset-x-4 before:top-1 before:h-1/2 before:rounded-full before:bg-white/35 before:blur-md before:content-[''] hover:-translate-y-0.5 hover:bg-[#ffc31f]"
                  href={item.href}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              ))}
              <details className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-black bg-[#ffb600] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_12px_24px_rgba(255,182,0,0.28),0_3px_8px_rgba(17,17,17,0.08),inset_0_1px_0_rgba(255,245,199,0.95)] before:absolute before:inset-x-4 before:top-1 before:h-1/2 before:rounded-full before:bg-white/35 before:blur-md before:content-[''] hover:-translate-y-0.5 hover:bg-[#ffc31f]">
                  <span className="relative z-10">Ville</span>
                  <span className="relative z-10 text-xs">▾</span>
                </summary>
                <CityDropdownLinks
                  className="absolute right-0 top-[calc(100%+12px)] z-50 grid max-h-[70vh] w-[320px] overflow-y-auto rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_24px_60px_rgba(17,17,17,0.14)]"
                  itemClassName="rounded-[18px] px-4 py-3 text-sm font-semibold text-black hover:bg-[#f8f6ee]"
                />
              </details>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                className="inline-flex h-12 min-w-[148px] items-center justify-center rounded-full bg-black px-4 text-center text-xs font-semibold whitespace-nowrap text-white hover:-translate-y-0.5 sm:min-w-[198px] sm:px-5 sm:text-sm"
                href="tel:+33680423031"
              >
                06 80 42 30 31
              </a>
              <button
                aria-expanded={isMobileMenuOpen}
                aria-label="Ouvrir le menu"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black bg-[#ffb600] text-black shadow-[0_12px_24px_rgba(255,182,0,0.24)] hover:-translate-y-0.5 xl:hidden"
                onClick={() => setIsMobileMenuOpen((value) => !value)}
                type="button"
              >
                <span className="flex flex-col gap-1.5">
                  <span className="block h-[3px] w-5 rounded-full bg-white" />
                  <span className="block h-[3px] w-5 rounded-full bg-white" />
                  <span className="block h-[3px] w-5 rounded-full bg-white" />
                </span>
              </button>
            </div>
          </div>

          {isMobileMenuOpen ? (
            <div className="mt-4 space-y-2 rounded-[24px] border border-black/10 bg-[#f8f6ee] p-3 shadow-[inset_1px_1px_0_rgba(255,255,255,0.88),inset_-1px_-1px_0_rgba(17,17,17,0.05)] xl:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="flex items-center rounded-[20px] border border-black/[0.08] bg-white px-4 py-3 text-left text-sm font-semibold hover:-translate-y-0.5"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                </Link>
              ))}
              <div className="rounded-[20px] border border-black/[0.08] bg-white px-4 py-3">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
                  Ville
                </label>
                <select
                  aria-label="Choisir une ville"
                  className="w-full rounded-[16px] border border-black/10 bg-[#f8f6ee] px-4 py-3 text-sm font-semibold text-black outline-none"
                  defaultValue={pathname?.startsWith("/ville/") ? pathname : "/ville"}
                  onChange={(event) => {
                    setIsMobileMenuOpen(false);
                    router.push(event.target.value);
                  }}
                >
                  <option value="/ville">Toutes Les Villes</option>
                  {medicalCityLinks.map((city) => (
                    <option key={city.href} value={city.href}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}
        </header>

        <div className="mt-6 grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden xl:block">
            <div className="sticky top-28 rounded-[34px] border border-white/60 bg-white/65 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl">
              <div className="rounded-[28px] bg-[#f8f6ee] p-5 shadow-[inset_1px_1px_0_rgba(255,255,255,0.88),inset_-1px_-1px_0_rgba(17,17,17,0.05)]">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-black/45">
                  Navigation
                </p>
                <div className="mt-6 space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      className="flex items-center rounded-[22px] border border-black/[0.08] bg-white px-6 py-4 text-left hover:-translate-y-0.5"
                      href={item.href}
                    >
                      <span className="text-sm font-semibold">{item.label}</span>
                    </Link>
                  ))}
                  <details className="rounded-[22px] border border-black/[0.08] bg-white p-1 open:bg-[#fff7db]">
                    <summary className="cursor-pointer list-none rounded-[18px] px-5 py-4 text-left text-sm font-semibold">
                      Ville
                    </summary>
                    <CityDropdownLinks
                      className="grid gap-2 px-2 pb-2"
                      itemClassName="rounded-[18px] border border-black/[0.06] bg-white px-4 py-3 text-sm font-semibold text-black/78 hover:-translate-y-0.5"
                    />
                  </details>
                </div>

                <div className="mt-6 rounded-[26px] bg-black p-5 text-white">
                  <p className="text-sm text-white/65">Assistance Directe</p>
                  <p className="mt-2 text-2xl font-semibold">Réponse Rapide</p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Un parcours clair, une demande simple et une réponse rapide pour
                    organiser vos trajets médicaux.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-6">{children}</div>
        </div>

        <footer className="mt-10 rounded-[36px] border border-[#ffb600]/18 bg-black px-6 py-8 text-white shadow-[0_24px_60px_rgba(17,17,17,0.28)]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6 border-b border-white/20 pb-6 xl:flex-row xl:items-start xl:justify-between">
              <div className="flex flex-wrap items-center gap-8">
                <Image
                  alt="Logo Assurance Maladie"
                  className="h-auto w-[180px]"
                  height={72}
                  src="/footer-assurance-maladie.svg"
                  unoptimized
                  width={260}
                />
                <Image
                  alt="Logo Securite Sociale"
                  className="h-auto w-[110px]"
                  height={72}
                  src="/footer-securite-sociale.svg"
                  unoptimized
                  width={140}
                />
              </div>

              <div className="xl:text-right">
                <p className="text-2xl font-semibold text-white">Suivez-nous :</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 xl:justify-end">
                  {[
                    {
                      src: "/social-x.png",
                      alt: "X",
                      href: "https://www.instagram.com/taxi_du_mole?igsh=dHF5eWw2cXdnZzI0",
                    },
                    {
                      src: "/social-bluesky.png",
                      alt: "Bluesky",
                      href: "https://www.instagram.com/taxi_du_mole?igsh=dHF5eWw2cXdnZzI0",
                    },
                    {
                      src: "/social-linkedin.png",
                      alt: "LinkedIn",
                      href: "https://www.instagram.com/taxi_du_mole?igsh=dHF5eWw2cXdnZzI0",
                    },
                    {
                      src: "/social-youtube.png",
                      alt: "YouTube",
                      href: "https://www.instagram.com/taxi_du_mole?igsh=dHF5eWw2cXdnZzI0",
                    },
                    {
                      src: "/social-instagram.png",
                      alt: "Instagram",
                      href: "https://www.instagram.com/taxi_du_mole?igsh=dHF5eWw2cXdnZzI0",
                    },
                  ].map((social) => (
                    <a
                      key={social.alt}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ffb600]/20 bg-[#ffb600]/10 hover:-translate-y-0.5"
                      href={social.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <Image
                        alt={social.alt}
                        className="h-6 w-6 object-contain"
                        height={24}
                        src={social.src}
                        unoptimized
                        width={24}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <a
                className="inline-flex items-center justify-center rounded-[24px] border border-[#ffb600]/20 bg-[#111111] px-6 py-5 text-lg font-semibold text-white hover:-translate-y-0.5"
                href="mailto:contact@taxidumole.com"
              >
                Nous Contacter
              </a>
              <a
                className="inline-flex items-center justify-center rounded-[24px] border border-[#ffb600] bg-[#ffb600] px-6 py-5 text-lg font-semibold text-black hover:-translate-y-0.5"
                href="tel:+33680423031"
              >
                06 80 42 30 31
              </a>
            </div>

            <div className="border-t border-[#ffb600]/18 pt-6 text-center text-sm leading-8 text-white/88">
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                <Link className="text-white hover:text-[#ffb600]" href="/mentions-legales">Mentions Légales</Link>
                <span className="text-[#ffb600]">|</span>
                <Link className="text-white hover:text-[#ffb600]" href="/cgu">CGU</Link>
                <span className="text-[#ffb600]">|</span>
                <a className="text-white hover:text-[#ffb600]" href="mailto:contact@taxidumole.com">Données Personnelles</a>
                <span className="text-[#ffb600]">|</span>
                <Link className="text-white hover:text-[#ffb600]" href="/">Plan Du Site</Link>
              </div>
              <p className="mt-4 text-white/65">
                Taxi Du Môle • Bonneville 74130 • 06 80 42 30 31 •
                contact@taxidumole.com
              </p>
            </div>
          </div>
        </footer>
      </div>

    </main>
  );
}
