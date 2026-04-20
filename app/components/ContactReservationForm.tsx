"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzXwCBwGYd7Ao_v3wvJLRN-hpqEyv-aJp4xaGnaa53_orXSnIORDhdhXncHYBcxE-oa/exec";

type FeedbackState = "idle" | "sending" | "success" | "error";

type CalendarData = {
  pickup?: string;
  destination?: string;
  date?: string;
  time?: string;
};

function formatGoogleDate(date: Date) {
  return (
    date.getUTCFullYear() +
    String(date.getUTCMonth() + 1).padStart(2, "0") +
    String(date.getUTCDate()).padStart(2, "0") +
    "T" +
    String(date.getUTCHours()).padStart(2, "0") +
    String(date.getUTCMinutes()).padStart(2, "0") +
    "00Z"
  );
}

function buildCalendarLink(data: CalendarData) {
  if (!data.date || !data.time) return null;

  const start = new Date(`${data.date}T${data.time}`);
  const end = new Date(start.getTime() + 30 * 60 * 1000);

  return (
    "https://www.google.com/calendar/render?action=TEMPLATE" +
    `&text=${encodeURIComponent("Reservation Taxi du Mole")}` +
    `&dates=${formatGoogleDate(start)}/${formatGoogleDate(end)}` +
    `&details=${encodeURIComponent(
      `Depart : ${data.pickup ?? ""}\nDestination : ${data.destination ?? ""}`,
    )}` +
    `&location=${encodeURIComponent(data.pickup ?? "")}`
  );
}

export function ContactReservationForm() {
  const [status, setStatus] = useState<FeedbackState>("idle");
  const [calendarLink, setCalendarLink] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    setStatus("sending");
    setCalendarLink(null);

    try {
      await fetch(ENDPOINT, {
        method: "POST",
        body: formData,
        mode: "no-cors",
        redirect: "follow",
      });

      setCalendarLink(
        buildCalendarLink({
          date: data.date,
          time: data.time,
          pickup: data.pickup,
          destination: data.destination,
        }),
      );
      setStatus("success");
      form.reset();
      router.push("/demande-envoyee");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-[32px] border border-black/10 bg-white/75 p-4 shadow-[24px_24px_60px_rgba(17,17,17,0.08),-20px_-20px_50px_rgba(255,255,255,0.92)] backdrop-blur-xl sm:p-6">
      <div className="rounded-[28px] border border-white/70 bg-[#f8f6ee] p-6 shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),inset_-1px_-1px_0_rgba(17,17,17,0.06)]">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
              Reservation Medicale
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-black">
              Reserver Votre Taxi
            </h3>
          </div>
          <div className="rounded-full bg-[#ffb600] px-4 py-2 text-sm font-bold text-black">
            24h/24
          </div>
        </div>

        <form autoComplete="on" className="grid gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-black/80">
              Nom / Prenom
            </label>
            <input
              autoComplete="name"
              name="name"
              required
              className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(255,182,0,0.15)]"
              placeholder="Votre nom et prenom"
              type="text"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-black/80">
                Telephone
              </label>
              <input
                autoComplete="tel"
                name="phone"
                required
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(255,182,0,0.15)]"
                placeholder="06 00 00 00 00"
                type="tel"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-black/80">
                Email
              </label>
              <input
                autoComplete="email"
                name="email"
                required
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(255,182,0,0.15)]"
                placeholder="contact@exemple.fr"
                type="email"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-black/80">
                Date De Depart
              </label>
              <input
                name="date"
                required
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(255,182,0,0.15)]"
                type="date"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-black/80">
                Heure De Prise En Charge
              </label>
              <input
                name="time"
                required
                className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(255,182,0,0.15)]"
                type="time"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-black/80">
              Adresse De Prise En Charge
            </label>
            <input
              autoComplete="street-address"
              name="pickup"
              required
              className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(255,182,0,0.15)]"
              placeholder="Adresse de depart"
              type="text"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-black/80">
              Destination
            </label>
            <input
              autoComplete="off"
              name="destination"
              required
              className="h-12 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(255,182,0,0.15)]"
              placeholder="Etablissement ou adresse"
              type="text"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-black/80">
              Informations Supplementaires
            </label>
            <textarea
              name="infos"
              className="min-h-[120px] w-full rounded-[22px] border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 focus:shadow-[0_0_0_4px_rgba(255,182,0,0.15)]"
              placeholder="Bon de transport, besoin d'assistance, fauteuil, horaire de sortie..."
            />
          </div>

          <button
            className="mt-2 inline-flex h-[52px] items-center justify-center rounded-full bg-[#ffb600] px-6 text-base font-bold text-black shadow-[0_16px_30px_rgba(255,182,0,0.32)] hover:-translate-y-0.5"
            disabled={status === "sending"}
            type="submit"
          >
            {status === "sending" ? "Envoi En Cours..." : "Envoyer La Reservation"}
          </button>
        </form>

        <div className="mt-4 space-y-3 text-sm">
          {status === "success" ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800">
              E-mail envoyé, réponse en cours.
            </div>
          ) : null}

          {calendarLink ? (
            <a
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 font-semibold text-white hover:-translate-y-0.5"
              href={calendarLink}
              rel="noreferrer"
              target="_blank"
            >
              Ajouter A Google Agenda
            </a>
          ) : null}

          {status === "error" ? (
            <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-red-700">
              Erreur lors de l&apos;envoi. Merci de reessayer.
            </div>
          ) : null}

          <p className="text-black/55">
            Reponse rapide, sans spam, avec confirmation de disponibilite.
          </p>
        </div>
      </div>
    </div>
  );
}
