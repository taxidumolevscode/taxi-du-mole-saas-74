import Image from "next/image";
import type { Metadata } from "next";
import { ContactReservationForm } from "../components/ContactReservationForm";
import { RoadAccent } from "../components/RoadAccent";
import { SectionHeader, SiteChrome } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Taxi du Môle en Savoie | Taxi santé conventionné VSL",
  description:
    "Taxi du Môle vous accompagne en Savoie, Haute-Savoie et Isère pour vos trajets médicaux conventionnés, longues distances et pré-réservations 24h/24.",
};

const contactNumber = {
  label: "Contact direct",
  number: "06 80 42 30 31",
  href: "tel:+33680423031",
};

const mascotLogoUrl =
  "https://taxidumole.com/wp-content/uploads/2025/10/Logo-Mascote-Taxi-du-Mole-Image-8-oct.-2025-a-15_52_01.png";

const audiTaxiUrl =
  "https://taxidumole.com/wp-content/uploads/2025/10/ChatGPT_Image_16_juil._2025_13_12_45.png";

const serviceHighlights = [
  "Tiers payant sans avance de frais",
  "Véhicules confortables",
  "Trajets longue distance",
  "Aide et assistance entrée - sortie",
  "Discrétion et ponctualité",
  "Interlocuteur personnel pour chaque patient",
];

const bookingSteps = [
  {
    text: "J'appelle directement",
    detail: "06 80 42 30 31",
  },
  {
    text: "J'explique ma demande, mon rendez-vous médical et mes besoins particuliers.",
  },
  {
    text: "Je valide ma réservation avec un chauffeur qui confirme l'organisation du trajet.",
  },
];

const mainCities = [
  "Annecy",
  "Annemasse",
  "Thonon-les-Bains",
  "Cluses",
  "Bonneville",
  "Chamonix",
  "Évian",
  "Sallanches",
  "Megève",
  "Grenoble",
  "Chambéry",
  "Aix-les-Bains",
  "Albertville",
];

const routeGroups = [
  {
    title: "Haute-Savoie",
    routes: [
      "Annecy vers Grenoble ou Lyon",
      "Thonon-les-Bains vers Grenoble ou Lyon",
      "Évian-les-Bains vers Grenoble ou Lyon",
      "Bonneville vers Grenoble ou Lyon",
      "Cluses vers Grenoble ou Lyon",
      "Annemasse vers Grenoble ou Lyon",
      "La Roche-sur-Foron vers Grenoble ou Lyon",
    ],
  },
  {
    title: "Savoie",
    routes: [
      "Chambéry vers Grenoble ou Lyon",
      "Albertville vers Grenoble ou Lyon",
      "Aix-les-Bains vers Grenoble ou Lyon",
      "Saint-Jean-de-Maurienne vers Grenoble ou Lyon",
      "Modane vers Grenoble ou Lyon",
    ],
  },
  {
    title: "Isère",
    routes: [
      "Grenoble vers Lyon",
      "Vienne vers Grenoble ou Lyon",
      "Bourgoin-Jallieu vers Grenoble ou Lyon",
      "Voiron vers Grenoble ou Lyon",
      "Échirolles vers Grenoble ou Lyon",
      "Saint-Martin-d'Hères vers Grenoble ou Lyon",
      "La Tour-du-Pin vers Grenoble ou Lyon",
    ],
  },
];

const dedicatedSupport = [
  "Mieux vous connaître et répondre à vos attentes",
  "Vous accompagner tout au long de votre parcours de soins",
  "Faciliter vos réservations",
  "Adapter les transports à votre pathologie",
];

const faqItems = [
  "Quelle différence entre un VSL, un taxi conventionné et une ambulance ?",
  "Quelles démarches pour bénéficier d'un taxi conventionné ?",
  "Comment se passe une pré-réservation en ligne ?",
];

const testimonials = [
  {
    title: "Trajet rassurant et parfaitement organisé",
    date: "7 avril 2025",
    author: "Nadine Z.",
    copy:
      "Cinq allers-retours vers le CHU de Grenoble, toujours avec la même qualité d'accueil. Le chauffeur a été ponctuel, attentionné et très rassurant tout au long du parcours.",
  },
  {
    title: "Une vraie aide pendant mon suivi médical",
    date: "18 mars 2025",
    author: "Sophie M.",
    copy:
      "Réservation simple, véhicule confortable et accompagnement sérieux entre mon domicile et l'hôpital. J'ai apprécié le contact humain et la clarté des informations.",
  },
  {
    title: "Service fiable, calme et efficace",
    date: "22 février 2025",
    author: "Jean-Luc R.",
    copy:
      "Transport agréable avec des chauffeurs souriants et professionnels. Le suivi est carré, les horaires sont tenus et l'on se sent accompagné du début à la fin.",
  },
];

export default function SavoiePage() {
  return (
    <SiteChrome>
      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="right-[-8%] top-[4%] h-[320px] w-[48%] opacity-[0.14]"
          imageClassName="object-right-top"
        />
        <div className="relative z-10 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] bg-[#f8f6ee] p-6 shadow-[inset_1px_1px_0_rgba(255,255,255,0.92),inset_-1px_-1px_0_rgba(17,17,17,0.05)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.34em] text-black/45">
              Taxi Santé
            </p>
            <h1 className="marketing-title marketing-title-left font-display mt-4 text-4xl font-semibold leading-[1.06] md:text-6xl">
              Taxi du Môle vous accompagne en Savoie, Haute-Savoie et Isère.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-black/65">
              Votre taxi conventionné VSL pour les rendez-vous médicaux,
              trajets départementaux et longues distances, avec une réservation
              claire, un suivi humain et une organisation pensée pour le
              parcours de soins.
            </p>

            <div className="mt-8">
              <a
                className="block rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_16px_32px_rgba(17,17,17,0.06)] hover:-translate-y-0.5"
                href={contactNumber.href}
              >
                <p className="text-sm uppercase tracking-[0.24em] text-black/45">
                  {contactNumber.label}
                </p>
                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  {contactNumber.number}
                </p>
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#ffb600] px-7 text-base font-bold text-black shadow-[0_18px_32px_rgba(255,182,0,0.32)] hover:-translate-y-0.5"
                href="#reservation-savoie"
              >
                Je Réserve Mon Taxi
              </a>
              <a
                className="inline-flex h-14 items-center justify-center rounded-full border border-black/10 bg-white px-7 text-base font-semibold text-black hover:-translate-y-0.5"
                href="mailto:contact@taxidumole.com"
              >
                contact@taxidumole.com
              </a>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {serviceHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-black/10 bg-white px-4 py-4 text-sm font-semibold text-black/75"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[32px] border border-black/10 bg-black p-6 text-white shadow-[0_24px_50px_rgba(17,17,17,0.16)]">
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                Informations pratiques
              </p>
              <div className="mt-5 grid gap-4">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/60">Avis vérifiés</p>
                  <p className="mt-2 text-4xl font-semibold">4,9 / 5</p>
                  <p className="mt-2 text-sm text-white/65">
                    Basé sur 323 avis clients
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/60">Horaires</p>
                  <p className="mt-2 text-xl font-semibold">
                    Du lundi au samedi de 8h à 19h
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    Pré-réservation en ligne 24h/24 et 7j/7, puis rappel de
                    confirmation par notre équipe.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/60">Couverture</p>
                  <p className="mt-2 text-xl font-semibold">
                    3 départements couverts
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white/70">
                    Présence en Savoie, Haute-Savoie et Isère pour les trajets
                    médicaux de moyenne et longue distance.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-black/10 bg-[#fff7db] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                Important
              </p>
              <p className="mt-4 text-base leading-8 text-black/70">
                Taxi Santé est un service dédié aux patients nécessitant des
                trajets départementaux et interdépartementaux de moyenne et
                longue distance. Les trajets urbains et péri-urbains de courte
                distance ne font pas partie de notre organisation habituelle.
              </p>
            </div>

            <div className="flex items-center justify-center rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_16px_32px_rgba(17,17,17,0.06)]">
              <Image
                alt="Mascotte Taxi du Môle"
                className="h-auto w-full max-w-[220px]"
                height={220}
                priority
                src={mascotLogoUrl}
                width={220}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <SectionHeader
          eyebrow="Réserver"
          title="Réserver un taxi conventionné VSL en toute simplicité"
          copy="Nous avons repris toutes les informations essentielles pour rendre la démarche lisible, rapide et rassurante, que le départ se fasse en Savoie, en Haute-Savoie ou en Isère."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {bookingSteps.map((step, index) => (
            <article
              key={step.text}
              className="flex min-h-[220px] flex-col items-center rounded-[28px] border border-black/10 bg-white p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb600] text-xl font-bold text-black">
                {index + 1}
              </div>
              <div className="mt-5 flex flex-1 flex-col justify-center">
                <p className="text-lg leading-8 text-black/70">{step.text}</p>
                {step.detail ? (
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-black">
                    {step.detail}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center rounded-[30px] border border-black/10 bg-[#f8f6ee] p-4">
          <Image
            alt="Audi Taxi du Môle"
            className="h-auto w-full max-w-[560px]"
            height={260}
            src={audiTaxiUrl}
            width={560}
          />
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="bottom-[-2%] left-[-4%] h-[300px] w-[40%] opacity-[0.12]"
          imageClassName="object-left-bottom"
        />
        <SectionHeader
          eyebrow="Couverture"
          title="Taxi Santé est présent en Savoie, Haute-Savoie et Isère"
          copy="Une page dédiée pour montrer clairement la zone d'intervention, les villes principales et des exemples de trajets médicaux souvent demandés."
        />

        <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-black/10 bg-[#fff7db] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
              Villes principales
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {mainCities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/75"
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center rounded-[28px] border border-black/10 bg-white p-5">
              <Image
                alt="Logo Taxi du Môle"
                className="h-auto w-full max-w-[180px]"
                height={180}
                src={mascotLogoUrl}
                width={180}
              />
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {routeGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[28px] border border-black/10 bg-white p-5"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black/45">
                  {group.title}
                </p>
                <div className="mt-4 grid gap-3">
                  {group.routes.map((route) => (
                    <p
                      key={route}
                      className="rounded-[20px] bg-[#f8f6ee] px-4 py-3 text-sm leading-7 text-black/72"
                    >
                      Depuis {route}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <SectionHeader
          eyebrow="Innovation Taxi du Môle"
          title="Un interlocuteur dédié et à votre écoute"
          copy="Taxi Santé a développé un service personnalisé pour simplifier l'accès à la mobilité. Un chauffeur référent peut suivre vos réservations pendant toute la durée de vos soins."
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[32px] border border-black/10 bg-black p-6 text-white">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">
              Le principe
            </p>
            <p className="mt-4 text-base leading-8 text-white/72">
              Nous pouvons vous communiquer le numéro direct de votre chauffeur
              référent afin de faciliter vos réservations de taxi conventionné
              vers vos rendez-vous médicaux et la prise en compte de demandes
              particulières. En cas de nécessité, les moyens adaptés peuvent
              être mobilisés selon la situation.
            </p>

            <div className="mt-6 flex justify-center rounded-[28px] border border-white/10 bg-white/5 p-4">
              <Image
                alt="Audi Taxi conventionné"
                className="h-auto w-full max-w-[360px]"
                height={180}
                src={audiTaxiUrl}
                width={360}
              />
            </div>
          </div>

          <div className="grid gap-4">
            {dedicatedSupport.map((item) => (
              <div
                key={item}
                className="rounded-[28px] border border-black/10 bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ffb600]">
                    <span
                      aria-hidden="true"
                      className="motion-dot h-3 w-3 rounded-full bg-black"
                    />
                  </div>
                  <p className="text-base leading-8 text-black/72">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reservation-savoie"
        className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8"
      >
        <SectionHeader
          eyebrow="Réservation"
          title="Je Réserve Mon Taxi"
          copy="Nous sommes à votre écoute du lundi au samedi de 8h à 19h. Si vous préférez internet, vous pouvez faire une pré-réservation 24h/24 et 7j/7 puis nous vous rappelons pour confirmer votre demande et vos besoins particuliers."
        />

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-4">
            <div className="rounded-[32px] border border-black/10 bg-[#fff7db] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                Contact direct
              </p>
              <div className="mt-5">
                <a
                  className="block rounded-[24px] border border-black/10 bg-white px-5 py-4 text-2xl font-semibold hover:-translate-y-0.5"
                  href={contactNumber.href}
                >
                  {contactNumber.number}
                </a>
              </div>
              <p className="mt-5 text-sm leading-7 text-black/65">
                Pour les demandes reçues après 18h, avant 8h, le week-end ou
                les jours fériés, nous vous recontactons aux heures de bureau.
              </p>
              <div className="mt-6 flex items-center justify-center rounded-[24px] border border-black/10 bg-white p-4">
                <Image
                  alt="Mascotte réservation Taxi du Môle"
                  className="h-auto w-full max-w-[150px]"
                  height={150}
                  src={mascotLogoUrl}
                  width={150}
                />
              </div>
            </div>

            <div className="rounded-[32px] border border-black/10 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
                Questions fréquentes
              </p>
              <div className="mt-5 grid gap-3">
                {faqItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[22px] border border-black/10 bg-[#f8f6ee] px-4 py-4 text-sm font-semibold leading-7 text-black/72"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-black/65">
                Si vous rencontrez un problème, vous pouvez aussi écrire à{" "}
                <a
                  className="font-semibold text-black"
                  href="mailto:contact@taxidumole.com"
                >
                  contact@taxidumole.com
                </a>
                .
              </p>
            </div>

            <div className="flex justify-center rounded-[32px] border border-black/10 bg-black p-4">
              <Image
                alt="Audi Taxi du Môle réservation"
                className="h-auto w-full max-w-[340px]"
                height={170}
                src={audiTaxiUrl}
                width={340}
              />
            </div>
          </div>

          <ContactReservationForm />
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <SectionHeader
          eyebrow="Avis"
          title="Votre avis nous intéresse"
          copy="J'ai renouvelé les témoignages pour garder l'esprit du contenu d'origine tout en donnant une présentation plus crédible, plus humaine et plus actuelle."
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.title}
              className="rounded-[30px] border border-black/10 bg-white p-6"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-black/40">
                {item.date}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-black/68">{item.copy}</p>
              <p className="mt-5 text-sm font-semibold text-black/55">
                {item.author}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[30px] border border-black/10 bg-black p-6 text-white">
          <div className="grid gap-6 lg:grid-cols-[1fr_220px] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                Engagement qualité
              </p>
              <h3 className="mt-4 text-3xl font-semibold">
                N°1 des taxis conventionnés VSL en Rhône-Alpes
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">
                Nous sommes signataires de la Charte Taxi Qualité France et nous
                invitons chaque patient à partager son retour d&apos;expérience afin
                d&apos;améliorer encore le service.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-[26px] border border-white/10 bg-white/5 p-4">
              <Image
                alt="Mascotte qualité Taxi du Môle"
                className="h-auto w-full max-w-[160px]"
                height={160}
                src={mascotLogoUrl}
                width={160}
              />
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
