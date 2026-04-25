import { RoadAccent } from "../components/RoadAccent";
import { SectionHeader, SiteChrome } from "../components/SiteChrome";

export default function CGUPage() {
  return (
    <SiteChrome>
      <section className="relative overflow-hidden rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <RoadAccent
          className="bottom-[-4%] right-[-8%] h-[280px] w-[48%] opacity-[0.16] md:h-[360px]"
          imageClassName="object-right-bottom"
          priority
        />

        <div className="relative z-10">
          <SectionHeader
            copy="Ces conditions générales d'utilisation encadrent l'accès et l'usage du site Taxi Du Môle par les visiteurs, prospects et clients."
            eyebrow="Conditions"
            title="Conditions Générales D&apos;Utilisation"
          />

          <div className="mt-8 grid gap-5">
            <div className="rounded-[28px] border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-semibold">1. Objet</h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                Le site Taxi Du Môle a pour objet de présenter l&apos;activité de taxi,
                les informations de contact, les services proposés et les moyens de
                transmettre une demande de réservation ou d&apos;information.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-semibold">2. Accès Au Site</h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                Le site est accessible à tout utilisateur disposant d&apos;un accès à
                internet. Taxi Du Môle peut suspendre, limiter ou interrompre
                l&apos;accès au site pour des raisons techniques, de maintenance ou
                d&apos;évolution du service.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-semibold">3. Utilisation Des Formulaires</h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                Les formulaires présents sur le site permettent de transmettre une
                demande. L&apos;envoi d&apos;un formulaire ne vaut pas confirmation
                définitive d&apos;une course. Toute réservation reste soumise à
                disponibilité, validation et confirmation par Taxi Du Môle.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-semibold">
                4. Engagements De L&apos;Utilisateur
              </h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                L&apos;utilisateur s&apos;engage à fournir des informations exactes,
                complètes et sincères lorsqu&apos;il contacte Taxi Du Môle. Il
                s&apos;engage également à ne pas utiliser le site à des fins
                frauduleuses, abusives ou contraires à la loi.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-semibold">5. Propriété Intellectuelle</h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                Tous les contenus, signes distinctifs et éléments visuels du site
                restent la propriété de Taxi Du Môle ou de leurs titulaires
                respectifs. Toute utilisation non autorisée est interdite.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-white p-6">
              <h3 className="text-2xl font-semibold">6. Limitation De Responsabilité</h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                Taxi Du Môle met tout en œuvre pour assurer un site fiable et à
                jour, sans garantir l&apos;absence d&apos;erreur, d&apos;interruption ou
                d&apos;indisponibilité. L&apos;utilisateur reconnaît utiliser le site
                sous sa propre responsabilité.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/10 bg-[#fff7db] p-6">
              <h3 className="text-2xl font-semibold">7. Droit Applicable</h3>
              <p className="mt-4 text-base leading-8 text-black/70">
                Les présentes CGU sont soumises au droit français. En cas de litige
                et à défaut de résolution amiable, les juridictions françaises
                compétentes pourront être saisies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}