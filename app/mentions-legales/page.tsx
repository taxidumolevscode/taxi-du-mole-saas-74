import { SectionHeader, SiteChrome } from "../components/SiteChrome";

export default function MentionsLegalesPage() {
  return (
    <SiteChrome>
      <section className="rounded-[36px] border border-white/60 bg-white/70 p-5 shadow-[0_24px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:p-8">
        <SectionHeader
          copy="Cette page présente les informations légales d'identification et d'exploitation du site Taxi Du Môle, conformément aux obligations applicables aux sites internet professionnels."
          eyebrow="Informations Légales"
          title="Mentions Légales"
        />

        <div className="mt-8 grid gap-5">
          <div className="rounded-[28px] border border-black/10 bg-white p-6">
            <h3 className="text-2xl font-semibold">Éditeur Du Site</h3>
            <div className="mt-4 space-y-2 text-base leading-8 text-black/70">
              <p>Nom commercial : Taxi Du Môle</p>
              <p>Activité : Transport de personnes par taxi</p>
              <p>Base d&apos;exploitation : Bonneville (74130), Haute-Savoie</p>
              <p>Téléphone : 06 80 42 30 31</p>
              <p>Email : contact@taxidumole.com</p>
              <p>SIRET : 534 380 332</p>
              <p>
                Adresse d&apos;exploitation utilisée sur les supports publics :
                297 Avenue de la Gare, 74130 Bonneville
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-6">
            <h3 className="text-2xl font-semibold">Directeur De La Publication</h3>
            <p className="mt-4 text-base leading-8 text-black/70">
              Le directeur de la publication est l&apos;exploitant du service Taxi
              Du Môle ou toute personne mandatée pour représenter l&apos;éditeur du
              site.
            </p>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-6">
            <h3 className="text-2xl font-semibold">Hébergement</h3>
            <div className="mt-4 space-y-2 text-base leading-8 text-black/70">
              <p>Hébergeur : OVH SAS</p>
              <p>Siège social : 2 rue Kellermann, 59100 Roubaix, France</p>
              <p>RCS Lille Métropole : 424 761 419 00045</p>
              <p>Code APE : 2620Z</p>
              <p>TVA intracommunautaire : FR 22 424 761 419</p>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-6">
            <h3 className="text-2xl font-semibold">Propriété Intellectuelle</h3>
            <p className="mt-4 text-base leading-8 text-black/70">
              L&apos;ensemble des contenus présents sur ce site, notamment les
              textes, visuels, éléments graphiques, logos, marques, photographies
              et éléments d&apos;interface, est protégé par le droit de la propriété
              intellectuelle. Toute reproduction, représentation, adaptation,
              publication ou exploitation, totale ou partielle, sans autorisation
              préalable écrite, est interdite.
            </p>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-6">
            <h3 className="text-2xl font-semibold">Responsabilité</h3>
            <p className="mt-4 text-base leading-8 text-black/70">
              Taxi Du Môle s&apos;efforce de fournir des informations aussi exactes et
              à jour que possible. Toutefois, les contenus présentés sur le site
              sont fournis à titre informatif et peuvent évoluer. L&apos;utilisateur
              reste responsable de l&apos;usage qu&apos;il fait des informations mises à
              sa disposition.
            </p>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-[#fff7db] p-6">
            <h3 className="text-2xl font-semibold">Données Personnelles</h3>
            <p className="mt-4 text-base leading-8 text-black/70">
              Les données transmises via les formulaires du site sont utilisées
              uniquement pour traiter les demandes de contact et de réservation.
              L&apos;utilisateur peut exercer ses droits d&apos;accès, de rectification,
              d&apos;effacement et d&apos;opposition en écrivant à
              contact@taxidumole.com. En cas de difficulté persistante, une
              réclamation peut être adressée à la CNIL.
            </p>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
