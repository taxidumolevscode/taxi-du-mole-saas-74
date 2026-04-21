export type MedicalCityEntry = {
  slug: string;
  label: string;
  title: string;
  description: string;
  intro: string;
  localHeading: string;
  localCopy: string[];
  nearbyAreas: string[];
  hospitals: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const medicalCities: MedicalCityEntry[] = [
  {
    slug: "annecy",
    label: "Annecy",
    title: "Taxi conventionné CPAM à Annecy pour vos transports médicaux",
    description:
      "Depuis Annecy, Taxi du Môle assure vos trajets médicaux conventionnés CPAM vers les hôpitaux, cliniques et centres spécialisés de Haute-Savoie et de la région.",
    intro:
      "Vous recherchez un taxi conventionné CPAM à Annecy pour une consultation, une hospitalisation, une séance de rééducation ou un traitement régulier ? Taxi du Môle vous accompagne avec un service fiable, ponctuel et confortable, dans le respect du cadre de prise en charge de l'Assurance Maladie.",
    localHeading: "Vos trajets médicaux depuis Annecy et le bassin annécien",
    localCopy: [
      "Nous organisons vos transports médicaux depuis Annecy, Cran-Gevrier, Meythet, Annecy-le-Vieux, Seynod et les communes proches vers les établissements de soins de Haute-Savoie, de Lyon, Grenoble et Genève selon votre dossier.",
      "Notre priorité est de proposer un trajet clair, rassurant et adapté à votre situation, avec une vraie disponibilité pour les rendez-vous programmés, les entrées ou sorties d'hospitalisation et les déplacements médicaux répétés.",
    ],
    nearbyAreas: ["Annecy-le-Vieux", "Seynod", "Meythet", "Cran-Gevrier"],
    hospitals: [
      "Centre Hospitalier Annecy Genevois",
      "Clinique Générale d'Annecy",
      "Clinique d'Argonay",
    ],
    faq: [
      {
        question: "Un taxi conventionné peut-il me conduire depuis Annecy vers un hôpital hors département ?",
        answer:
          "Oui, si le transport est prescrit et que votre situation ouvre droit à la prise en charge, un trajet depuis Annecy vers Lyon, Grenoble ou une autre destination médicale peut être organisé.",
      },
      {
        question: "Faut-il une prescription médicale avant le trajet ?",
        answer:
          "Oui, dans la majorité des cas la prescription médicale de transport doit être établie avant le déplacement pour permettre la prise en charge CPAM.",
      },
      {
        question: "Le tiers payant est-il possible ?",
        answer:
          "Selon votre dossier et les conditions de prise en charge, nous pouvons organiser un transport avec tiers payant afin de limiter ou éviter l'avance de frais.",
      },
      {
        question: "Intervenez-vous aussi pour les séances régulières ?",
        answer:
          "Oui, nous pouvons accompagner les patients d'Annecy pour des trajets réguliers liés à un traitement, une rééducation ou des consultations répétées.",
      },
    ],
  },
  {
    slug: "annemasse",
    label: "Annemasse",
    title: "Taxi conventionné CPAM à Annemasse pour transport médical",
    description:
      "Taxi du Môle assure vos transports médicaux conventionnés CPAM depuis Annemasse avec un service ponctuel, confortable et adapté à vos rendez-vous médicaux.",
    intro:
      "Pour vos déplacements médicaux depuis Annemasse, Taxi du Môle met à disposition un service de taxi conventionné CPAM destiné aux patients ayant besoin d'un transport assis professionnalisé, sécurisé et organisé avec sérieux.",
    localHeading: "Un accompagnement médical fiable depuis Annemasse",
    localCopy: [
      "Nous intervenons à Annemasse et dans le secteur proche pour les rendez-vous médicaux, les examens, les traitements, les entrées ou sorties d'hospitalisation et les déplacements vers les structures médico-sociales.",
      "La proximité avec Genève, Ambilly, Gaillard et Vétraz-Monthoux fait d'Annemasse un point clé pour les trajets de santé. Nous assurons des déplacements clairs et ponctuels, avec une organisation pensée pour réduire le stress du patient.",
    ],
    nearbyAreas: ["Ambilly", "Gaillard", "Vétraz-Monthoux", "Ville-la-Grand"],
    hospitals: [
      "Hôpital privé Pays de Savoie",
      "Centre Hospitalier Alpes Léman",
      "Centre Hospitalier Annecy Genevois - Saint-Julien-en-Genevois",
    ],
    faq: [
      {
        question: "Puis-je réserver un taxi conventionné à Annemasse pour un rendez-vous au CHAL ?",
        answer:
          "Oui, nous assurons régulièrement les trajets entre Annemasse et le Centre Hospitalier Alpes Léman, selon prescription et prise en charge.",
      },
      {
        question: "Le service est-il réservé uniquement aux personnes âgées ?",
        answer:
          "Non, le taxi conventionné CPAM concerne toute personne dont l'état de santé justifie un transport médical prescrit.",
      },
      {
        question: "Intervenez-vous aussi tôt le matin ?",
        answer:
          "Oui, nous organisons les prises en charge matinales selon les horaires de votre rendez-vous médical ou hospitalier.",
      },
      {
        question: "Peut-on être accompagné pendant le trajet ?",
        answer:
          "La présence d'un accompagnateur dépend de la situation médicale et des justificatifs associés au dossier de transport.",
      },
    ],
  },
  {
    slug: "bonneville",
    label: "Bonneville",
    title: "Taxi conventionné CPAM à Bonneville pour transport médical assis",
    description:
      "Taxi du Môle vous accompagne depuis Bonneville pour vos transports médicaux conventionnés CPAM vers les hôpitaux, cliniques et centres spécialisés.",
    intro:
      "Depuis Bonneville, Taxi du Môle accompagne les patients qui ont besoin d'un taxi conventionné CPAM pour leurs consultations, examens, soins réguliers ou hospitalisations. Nous assurons un service rassurant, ponctuel et adapté aux contraintes médicales.",
    localHeading: "Vos déplacements médicaux depuis Bonneville et la Vallée de l'Arve",
    localCopy: [
      "Bonneville reste au cœur de la Vallée de l'Arve pour les trajets vers le CHAL, La Roche-sur-Foron, Sallanches, Annecy, Grenoble ou Lyon. Nous organisons vos transports avec une vraie logique de ponctualité et d'accompagnement.",
      "Nous pouvons également intervenir depuis Ayse, Marignier, Vougy et les communes voisines pour les besoins de transport médical, médico-social et les rendez-vous de suivi.",
    ],
    nearbyAreas: ["Ayse", "Marignier", "Vougy", "Contamine-sur-Arve"],
    hospitals: [
      "Hôpital de proximité Martel de Janville",
      "Centre Hospitalier Alpes Léman",
      "Hôpital Andrevetan",
    ],
    faq: [
      {
        question: "Peut-on réserver depuis Bonneville pour une consultation à Annecy ou Grenoble ?",
        answer:
          "Oui, nous assurons des trajets médicaux longue distance depuis Bonneville selon la prescription médicale et la situation du patient.",
      },
      {
        question: "Les transports médicaux sont-ils remboursés à 55 % ou 100 % ?",
        answer:
          "La prise en charge dépend de votre dossier. Elle est souvent de 55 % et peut atteindre 100 % dans certaines situations prévues par l'Assurance Maladie.",
      },
      {
        question: "Faut-il réserver longtemps à l'avance ?",
        answer:
          "Il est préférable d'anticiper dès que possible, surtout pour les rendez-vous programmés et les trajets réguliers.",
      },
      {
        question: "Proposez-vous les trajets retour après consultation ?",
        answer:
          "Oui, nous pouvons prévoir l'aller-retour ou organiser un retour séparé selon la durée estimée de votre rendez-vous.",
      },
    ],
  },
  {
    slug: "chamonix-mont-blanc",
    label: "Chamonix-Mont-Blanc",
    title: "Taxi conventionné CPAM à Chamonix-Mont-Blanc",
    description:
      "Depuis Chamonix-Mont-Blanc, Taxi du Môle assure vos trajets médicaux conventionnés CPAM avec une organisation claire vers les structures de soins de la région.",
    intro:
      "Vous avez besoin d'un taxi conventionné CPAM à Chamonix-Mont-Blanc pour un rendez-vous médical, un suivi spécialisé ou une hospitalisation ? Taxi du Môle vous accompagne avec un transport assis professionnalisé pensé pour le confort et la régularité.",
    localHeading: "Un service adapté aux trajets médicaux depuis la vallée de Chamonix",
    localCopy: [
      "Nous prenons en charge les patients de Chamonix, Les Praz, Les Houches, Argentière et du secteur proche vers les hôpitaux, cliniques et centres spécialisés de Haute-Savoie et au-delà selon la prescription.",
      "Dans un secteur montagneux où l'organisation du déplacement compte beaucoup, nous privilégions l'anticipation, la ponctualité et une communication simple pour rassurer les patients et leurs proches.",
    ],
    nearbyAreas: ["Les Houches", "Argentière", "Servoz", "Vallorcine"],
    hospitals: [
      "Centre Hospitalier de Chamonix",
      "Hôpitaux du Pays du Mont-Blanc",
      "Centre Hospitalier Alpes Léman",
    ],
    faq: [
      {
        question: "Pouvez-vous assurer un transport médical depuis Chamonix vers Sallanches ?",
        answer:
          "Oui, nous accompagnons les patients de Chamonix vers Sallanches et d'autres établissements selon les besoins médicaux et la prescription.",
      },
      {
        question: "Le service fonctionne-t-il aussi en hiver ?",
        answer:
          "Oui, nous adaptons l'organisation des trajets à la réalité du terrain et aux conditions de circulation de la vallée.",
      },
      {
        question: "Le transport est-il possible pour des examens réguliers ?",
        answer:
          "Oui, les trajets réguliers peuvent être planifiés pour des examens, séances ou traitements selon le dossier du patient.",
      },
      {
        question: "Que faut-il présenter au chauffeur ?",
        answer:
          "Selon le dossier, il faut généralement présenter la prescription médicale, la carte Vitale et les justificatifs utiles à la prise en charge.",
      },
    ],
  },
  {
    slug: "cluses",
    label: "Cluses",
    title: "Taxi conventionné CPAM à Cluses pour vos trajets médicaux",
    description:
      "Taxi du Môle propose un service de taxi conventionné CPAM à Cluses pour vos déplacements médicaux vers les établissements de santé de Haute-Savoie et de la région.",
    intro:
      "Depuis Cluses, Taxi du Môle accompagne les patients qui ont besoin d'un transport médical assis conventionné CPAM pour leurs consultations, soins, examens et hospitalisations.",
    localHeading: "Un taxi conventionné CPAM au départ de Cluses",
    localCopy: [
      "Nous intervenons depuis Cluses, Thyez, Scionzier, Marnaz et les communes proches vers les hôpitaux, cliniques et centres de soins de la Vallée de l'Arve et de la Haute-Savoie.",
      "Le but est simple : proposer un trajet confortable, ponctuel et clair, avec un accompagnement humain pour les déplacements médicaux ponctuels comme pour les besoins de suivi régulier.",
    ],
    nearbyAreas: ["Scionzier", "Thyez", "Marnaz", "Magland"],
    hospitals: [
      "Hôpital de proximité Martel de Janville",
      "Centre Hospitalier Alpes Léman",
      "Hôpitaux du Pays du Mont-Blanc",
    ],
    faq: [
      {
        question: "Puis-je demander un taxi conventionné à Cluses pour une hospitalisation programmée ?",
        answer:
          "Oui, nous pouvons organiser les trajets liés aux entrées et sorties d'hospitalisation selon votre prescription médicale.",
      },
      {
        question: "La CPAM rembourse-t-elle toujours le trajet ?",
        answer:
          "Le remboursement dépend du contexte médical, de la prescription et des conditions prévues par l'Assurance Maladie.",
      },
      {
        question: "Intervenez-vous pour les structures médico-sociales ?",
        answer:
          "Oui, nous pouvons accompagner les patients vers différentes structures médico-sociales selon leur situation et leurs besoins.",
      },
      {
        question: "Le service est-il ponctuel pour les rendez-vous tôt le matin ?",
        answer:
          "Oui, nous accordons une attention particulière aux horaires médicaux et à la ponctualité des prises en charge.",
      },
    ],
  },
  {
    slug: "contamine-sur-arve",
    label: "Contamine-sur-Arve",
    title: "Taxi conventionné CPAM à Contamine-sur-Arve et secteur Findrol",
    description:
      "Taxi du Môle assure vos transports médicaux conventionnés CPAM à Contamine-sur-Arve, Findrol et dans les communes voisines avec un service fiable et rassurant.",
    intro:
      "Pour vos déplacements médicaux à Contamine-sur-Arve et autour de Findrol, Taxi du Môle met à disposition un service de taxi conventionné CPAM conçu pour les patients qui ont besoin d'un transport assis professionnalisé.",
    localHeading: "Vos transports médicaux près du CHAL",
    localCopy: [
      "La proximité immédiate du Centre Hospitalier Alpes Léman rend Contamine-sur-Arve stratégique pour de nombreux rendez-vous médicaux, consultations spécialisées, examens, séances et entrées ou sorties d'hospitalisation.",
      "Nous intervenons également depuis Fillinges, Nangy, Arthaz-Pont-Notre-Dame et le secteur proche avec un accompagnement organisé et confortable.",
    ],
    nearbyAreas: ["Findrol", "Fillinges", "Nangy", "Arthaz-Pont-Notre-Dame"],
    hospitals: [
      "Centre Hospitalier Alpes Léman",
      "Centre de Néphrologie du CHAL",
      "Hôpital privé Pays de Savoie",
    ],
    faq: [
      {
        question: "Assurez-vous les trajets pour le CHAL ?",
        answer:
          "Oui, nous réalisons régulièrement des transports médicaux vers le CHAL et les services spécialisés situés à Contamine-sur-Arve.",
      },
      {
        question: "Le taxi conventionné peut-il servir pour des soins répétés ?",
        answer:
          "Oui, selon la prescription et les conditions de prise en charge, des trajets réguliers peuvent être planifiés.",
      },
      {
        question: "Intervenez-vous pour les communes autour de Findrol ?",
        answer:
          "Oui, nous couvrons Contamine-sur-Arve, Findrol et les communes voisines pour les besoins de transport médical.",
      },
      {
        question: "Comment réserver rapidement ?",
        answer:
          "Le plus simple est de nous contacter avec votre date de rendez-vous, votre lieu de départ et votre destination médicale.",
      },
    ],
  },
  {
    slug: "evian-les-bains",
    label: "Evian-les-Bains",
    title: "Taxi conventionné CPAM à Evian-les-Bains pour transport médical",
    description:
      "Taxi du Môle vous accompagne depuis Evian-les-Bains pour vos transports médicaux conventionnés CPAM vers les hôpitaux, cliniques et centres de soins de Haute-Savoie.",
    intro:
      "Depuis Evian-les-Bains, Taxi du Môle propose un service de taxi conventionné CPAM destiné aux patients ayant besoin d'un transport médical assis fiable, confortable et bien organisé.",
    localHeading: "Vos déplacements médicaux depuis Evian-les-Bains et le Chablais",
    localCopy: [
      "Nous intervenons depuis Evian-les-Bains, Neuvecelle, Publier, Amphion et le secteur proche pour les consultations, soins, examens, entrées ou sorties d'hospitalisation.",
      "Notre service est pensé pour simplifier les trajets médicaux en offrant une organisation claire, une ponctualité réelle et un accompagnement adapté au profil du patient.",
    ],
    nearbyAreas: ["Publier", "Neuvecelle", "Amphion", "Lugrin"],
    hospitals: [
      "Centre Hospitalier de Thonon-les-Bains",
      "Hôpitaux du Léman",
      "Hôpital Georges-Pianta",
    ],
    faq: [
      {
        question: "Assurez-vous les trajets médicaux entre Evian-les-Bains et Thonon ?",
        answer:
          "Oui, nous organisons ce type de transport médical selon la prescription et les besoins du patient.",
      },
      {
        question: "Le service convient-il pour les patients âgés ?",
        answer:
          "Oui, notre service convient parfaitement aux seniors ayant besoin d'un transport assis professionnalisé.",
      },
      {
        question: "Peut-on réserver pour une consultation spécialisée ?",
        answer:
          "Oui, nous assurons les trajets vers les consultations spécialisées, bilans, soins et hospitalisations.",
      },
      {
        question: "Le tiers payant est-il possible ?",
        answer:
          "Selon le dossier et les conditions de prise en charge, le tiers payant peut être mis en place.",
      },
    ],
  },
  {
    slug: "la-roche-sur-foron",
    label: "La Roche-sur-Foron",
    title: "Taxi conventionné CPAM à La Roche-sur-Foron",
    description:
      "Taxi du Môle vous accompagne depuis La Roche-sur-Foron pour vos transports médicaux conventionnés CPAM vers les hôpitaux, cliniques et structures de soins de la région.",
    intro:
      "Depuis La Roche-sur-Foron, Taxi du Môle assure un service de taxi conventionné CPAM destiné aux patients ayant besoin d'un transport médical assis dans les meilleures conditions de confort et d'organisation.",
    localHeading: "Des trajets médicaux clairs depuis La Roche-sur-Foron",
    localCopy: [
      "Nous accompagnons les patients de La Roche-sur-Foron, Amancy, Eteaux, Saint-Sixt et du secteur proche vers les établissements de soins, les hôpitaux locaux et les centres spécialisés de Haute-Savoie.",
      "Ce service s'adresse aussi bien aux consultations ponctuelles qu'aux soins suivis, avec une attention particulière portée à la ponctualité et à la sérénité pendant le trajet.",
    ],
    nearbyAreas: ["Amancy", "Eteaux", "Saint-Sixt", "Cornier"],
    hospitals: [
      "Hôpital Andrevetan",
      "Centre Hospitalier Alpes Léman",
      "Centre Hospitalier Annecy Genevois",
    ],
    faq: [
      {
        question: "Pouvez-vous assurer les trajets médicaux vers Hôpital Andrevetan ?",
        answer:
          "Oui, nous intervenons pour les trajets médicaux liés à La Roche-sur-Foron et à ses établissements de soins, dont Hôpital Andrevetan.",
      },
      {
        question: "Le service est-il réservé aux habitants de La Roche-sur-Foron ?",
        answer:
          "Non, nous couvrons aussi les communes proches pour les transports médicaux conventionnés CPAM.",
      },
      {
        question: "Peut-on réserver un aller-retour dans la journée ?",
        answer:
          "Oui, selon votre rendez-vous et les besoins du dossier, nous pouvons organiser un aller-retour ou un retour différé.",
      },
      {
        question: "Faut-il une ALD pour bénéficier du service ?",
        answer:
          "Non, une ALD n'est pas systématiquement obligatoire. La prise en charge dépend avant tout de la prescription et du cadre médical du transport.",
      },
    ],
  },
  {
    slug: "megeve",
    label: "Megève",
    title: "Taxi conventionné CPAM à Megève pour transport médical",
    description:
      "Depuis Megève, Taxi du Môle assure vos trajets médicaux conventionnés CPAM avec un service adapté aux déplacements de santé en montagne et vers les centres spécialisés.",
    intro:
      "Taxi du Môle accompagne les patients de Megève pour leurs transports médicaux conventionnés CPAM avec un service fiable, humain et adapté aux réalités des déplacements en secteur montagneux.",
    localHeading: "Vos déplacements médicaux depuis Megève et les communes voisines",
    localCopy: [
      "Nous organisons les trajets médicaux depuis Megève, Demi-Quartier, Praz-sur-Arly, Combloux et le secteur proche vers les hôpitaux, cliniques et centres spécialisés de Haute-Savoie.",
      "Notre accompagnement vise à rendre chaque déplacement plus simple, plus fluide et plus rassurant, qu'il s'agisse d'un rendez-vous ponctuel, d'un suivi ou d'un trajet longue distance.",
    ],
    nearbyAreas: ["Demi-Quartier", "Praz-sur-Arly", "Combloux", "Cordon"],
    hospitals: [
      "Hôpitaux du Pays du Mont-Blanc",
      "Centre Hospitalier de Chamonix",
      "Centre Hospitalier Alpes Léman",
    ],
    faq: [
      {
        question: "Assurez-vous des trajets médicaux au départ de Megève toute l'année ?",
        answer:
          "Oui, nous organisons les transports médicaux depuis Megève tout au long de l'année selon les besoins du patient et les conditions de circulation.",
      },
      {
        question: "Puis-je être pris en charge pour un trajet vers Sallanches ?",
        answer:
          "Oui, les trajets entre Megève et Sallanches font partie des déplacements médicaux fréquents que nous pouvons organiser.",
      },
      {
        question: "Le transport est-il possible pour les patients âgés ?",
        answer:
          "Oui, nous accompagnons régulièrement des seniors pour leurs rendez-vous médicaux et leurs soins programmés.",
      },
      {
        question: "Le service convient-il aux consultations spécialisées ?",
        answer:
          "Oui, nous intervenons aussi pour les consultations spécialisées, examens, bilans et soins planifiés.",
      },
    ],
  },
  {
    slug: "morzine",
    label: "Morzine",
    title: "Taxi conventionné CPAM à Morzine pour vos transports médicaux",
    description:
      "Taxi du Môle propose un service de taxi conventionné CPAM à Morzine pour vos consultations, examens, traitements et hospitalisations en Haute-Savoie.",
    intro:
      "Vous avez besoin d'un taxi conventionné CPAM à Morzine pour un déplacement médical ? Taxi du Môle vous accompagne avec sérieux pour les trajets liés à vos soins, examens, consultations et hospitalisations.",
    localHeading: "Un service de transport médical depuis Morzine, Avoriaz et Les Gets",
    localCopy: [
      "Nous couvrons Morzine, Avoriaz, Les Gets, Montriond et le secteur alentour pour les déplacements médicaux vers les établissements de santé et les centres spécialisés de Haute-Savoie.",
      "Dans un secteur touristique et montagneux, nous accordons une importance particulière à la préparation du trajet, à la ponctualité et à la qualité d'accompagnement du patient.",
    ],
    nearbyAreas: ["Avoriaz", "Les Gets", "Montriond", "Essert-Romand"],
    hospitals: [
      "Hôpitaux du Léman",
      "Centre Hospitalier Alpes Léman",
      "Centre Hospitalier de Chamonix",
    ],
    faq: [
      {
        question: "Intervenez-vous depuis Morzine vers Thonon ou Annemasse ?",
        answer:
          "Oui, nous pouvons organiser des transports médicaux longue distance depuis Morzine selon la prescription et le besoin médical.",
      },
      {
        question: "Le service est-il adapté aux trajets en station ?",
        answer:
          "Oui, notre organisation tient compte des contraintes locales pour proposer un transport médical fiable et confortable.",
      },
      {
        question: "Peut-on réserver pour un examen ponctuel ?",
        answer:
          "Oui, nous assurons aussi les trajets médicaux ponctuels pour consultation, bilan ou examen spécialisé.",
      },
      {
        question: "Le taxi conventionné remplace-t-il un VSL ?",
        answer:
          "Le taxi conventionné fait partie du transport assis professionnalisé au même titre que le VSL, selon le mode prescrit par le médecin.",
      },
    ],
  },
  {
    slug: "passy",
    label: "Passy",
    title: "Taxi conventionné CPAM à Passy pour vos transports médicaux",
    description:
      "Taxi du Môle propose un service de taxi conventionné CPAM à Passy pour vos rendez-vous médicaux, hospitalisations et déplacements de soins.",
    intro:
      "Depuis Passy, Taxi du Môle accompagne les patients qui ont besoin d'un taxi conventionné CPAM pour un transport médical assis ponctuel ou régulier, avec une organisation rassurante et un vrai souci de ponctualité.",
    localHeading: "Vos trajets médicaux depuis Passy et le Pays du Mont-Blanc",
    localCopy: [
      "Nous couvrons Passy, Chedde, Plateau d'Assy, Servoz et les communes proches pour les rendez-vous médicaux, les traitements, les examens et les déplacements vers les établissements de soins.",
      "Notre objectif est de garantir un trajet confortable et serein vers Sallanches, Chamonix, Contamine-sur-Arve et les autres centres médicaux utiles à votre suivi.",
    ],
    nearbyAreas: ["Chedde", "Plateau d'Assy", "Servoz", "Sallanches"],
    hospitals: [
      "Hôpitaux du Pays du Mont-Blanc",
      "Centre Hospitalier de Chamonix",
      "Centre Hospitalier Alpes Léman",
    ],
    faq: [
      {
        question: "Pouvez-vous assurer un transport médical depuis Passy vers Sallanches ?",
        answer:
          "Oui, nous pouvons organiser les trajets médicaux entre Passy et Sallanches selon la prescription médicale et le besoin de prise en charge.",
      },
      {
        question: "Intervenez-vous aussi depuis le Plateau d'Assy ?",
        answer:
          "Oui, nous couvrons Passy et ses secteurs proches pour les besoins de transport conventionné CPAM.",
      },
      {
        question: "Le service fonctionne-t-il pour des soins répétés ?",
        answer:
          "Oui, nous pouvons planifier des trajets récurrents pour les consultations, séances et traitements réguliers.",
      },
      {
        question: "Est-il possible de réserver un aller-retour ?",
        answer:
          "Oui, nous pouvons organiser l'aller-retour ou un retour différé selon votre rendez-vous médical.",
      },
    ],
  },
  {
    slug: "sallanches",
    label: "Sallanches",
    title: "Taxi conventionné CPAM à Sallanches pour transport médical assis",
    description:
      "Taxi du Môle vous accompagne depuis Sallanches pour vos transports médicaux conventionnés CPAM vers les centres de soins, hôpitaux et cliniques de la région.",
    intro:
      "Depuis Sallanches, Taxi du Môle assure les trajets médicaux conventionnés CPAM des patients ayant besoin d'un transport assis professionnalisé dans un cadre fiable et rassurant.",
    localHeading: "Vos déplacements médicaux depuis Sallanches et le Pays du Mont-Blanc",
    localCopy: [
      "Nous couvrons Sallanches, Passy, Domancy, Cordon et le secteur proche pour les trajets médicaux vers les hôpitaux locaux, les consultations spécialisées et les centres de soins régionaux.",
      "Notre service convient aux rendez-vous médicaux ponctuels, aux soins suivis, aux bilans spécialisés ainsi qu'aux entrées et sorties d'hospitalisation.",
    ],
    nearbyAreas: ["Passy", "Domancy", "Cordon", "Combloux"],
    hospitals: [
      "Hôpitaux du Pays du Mont-Blanc",
      "Centre Hospitalier de Chamonix",
      "Centre Hospitalier Alpes Léman",
    ],
    faq: [
      {
        question: "Intervenez-vous pour les trajets entre Sallanches et le Pays du Mont-Blanc ?",
        answer:
          "Oui, nous organisons régulièrement les transports médicaux depuis Sallanches vers les structures de santé du secteur.",
      },
      {
        question: "Le transport médical est-il possible après une hospitalisation ?",
        answer:
          "Oui, les sorties d'hospitalisation peuvent être prises en charge si elles correspondent au cadre médical et administratif prévu.",
      },
      {
        question: "Peut-on vous solliciter pour des soins répétés ?",
        answer:
          "Oui, nous pouvons planifier des trajets réguliers pour des soins, traitements ou suivis médicaux.",
      },
      {
        question: "Le service couvre-t-il aussi les communes autour de Sallanches ?",
        answer:
          "Oui, nous intervenons dans le secteur autour de Sallanches selon les besoins de transport médical.",
      },
    ],
  },
  {
    slug: "saint-gervais-les-bains",
    label: "Saint-Gervais-les-Bains",
    title: "Taxi conventionné CPAM à Saint-Gervais-les-Bains",
    description:
      "Taxi du Môle propose un service de taxi conventionné CPAM à Saint-Gervais-les-Bains pour vos rendez-vous médicaux, consultations et trajets de soins.",
    intro:
      "Vous avez besoin d'un taxi conventionné CPAM à Saint-Gervais-les-Bains ? Taxi du Môle vous accompagne pour vos déplacements médicaux avec un service ponctuel, humain et adapté à votre situation.",
    localHeading: "Un service de transport médical depuis Saint-Gervais, Le Bettex et Saint-Nicolas-de-Véroce",
    localCopy: [
      "Nous intervenons depuis Saint-Gervais-les-Bains, Le Bettex, Saint-Nicolas-de-Véroce et les communes voisines pour les consultations, soins, examens et hospitalisations.",
      "Notre organisation prend en compte les réalités du secteur montagneux afin de proposer des trajets fluides, rassurants et bien préparés pour les patients et leurs proches.",
    ],
    nearbyAreas: ["Le Bettex", "Saint-Nicolas-de-Véroce", "Les Contamines", "Le Fayet"],
    hospitals: [
      "Hôpitaux du Pays du Mont-Blanc",
      "Centre Hospitalier de Chamonix",
      "Centre Hospitalier Alpes Léman",
    ],
    faq: [
      {
        question: "Assurez-vous les trajets médicaux depuis Le Bettex et Saint-Nicolas-de-Véroce ?",
        answer:
          "Oui, nous couvrons ce secteur pour les déplacements médicaux conventionnés CPAM selon la prescription médicale.",
      },
      {
        question: "Le service convient-il aux personnes âgées ?",
        answer:
          "Oui, nous accompagnons les seniors pour leurs rendez-vous médicaux, leurs soins et leurs déplacements liés à la santé.",
      },
      {
        question: "Peut-on réserver pour une consultation spécialisée hors vallée ?",
        answer:
          "Oui, des transports longue distance peuvent être organisés selon le contexte médical et administratif.",
      },
      {
        question: "Le chauffeur peut-il aider à l'installation ?",
        answer:
          "Nous apportons une aide adaptée à l'entrée et à la sortie du véhicule dans le cadre d'un transport assis professionnalisé.",
      },
    ],
  },
  {
    slug: "saint-jeoire",
    label: "Saint-Jeoire",
    title: "Taxi conventionné CPAM à Saint-Jeoire pour vos trajets médicaux",
    description:
      "Depuis Saint-Jeoire, Taxi du Môle assure un service de taxi conventionné CPAM pour les patients ayant besoin d'un transport médical fiable et confortable.",
    intro:
      "Taxi du Môle accompagne les patients de Saint-Jeoire pour leurs trajets médicaux conventionnés CPAM, avec une attention particulière portée à la ponctualité, au confort et à la simplicité des démarches.",
    localHeading: "Un transport médical depuis Saint-Jeoire, Onnion, Mégevette et Mieussy",
    localCopy: [
      "Nous intervenons depuis Saint-Jeoire, Onnion, Mégevette, Mieussy et le secteur proche pour les rendez-vous médicaux, les examens, les soins réguliers et les déplacements vers les structures spécialisées.",
      "Ce service vise à offrir une solution claire et accessible aux patients du secteur du Môle, avec une organisation adaptée aux besoins médicaux et aux horaires de consultation.",
    ],
    nearbyAreas: ["Onnion", "Mégevette", "Mieussy", "La Tour"],
    hospitals: [
      "Hôpital Dufresne-Sommeiller",
      "Centre Hospitalier Alpes Léman",
      "Hôpital Andrevetan",
    ],
    faq: [
      {
        question: "Pouvez-vous assurer un trajet médical depuis Saint-Jeoire vers le CHAL ?",
        answer:
          "Oui, nous pouvons organiser ce type de transport selon votre prescription et votre dossier de prise en charge.",
      },
      {
        question: "Intervenez-vous aussi depuis Onnion et Mieussy ?",
        answer:
          "Oui, notre couverture comprend Saint-Jeoire et les communes proches du secteur.",
      },
      {
        question: "Le service est-il possible pour un enfant ?",
        answer:
          "Oui, selon la prescription médicale et l'organisation prévue, un transport conventionné peut être mis en place pour un enfant.",
      },
      {
        question: "Que se passe-t-il si mon rendez-vous change d'horaire ?",
        answer:
          "Nous adaptons au mieux le transport selon les nouvelles informations et la disponibilité du planning.",
      },
    ],
  },
  {
    slug: "scionzier",
    label: "Scionzier",
    title: "Taxi conventionné CPAM à Scionzier pour transport médical",
    description:
      "Taxi du Môle assure vos déplacements médicaux conventionnés CPAM à Scionzier avec un service ponctuel et organisé vers les établissements de soins de Haute-Savoie.",
    intro:
      "Depuis Scionzier, Taxi du Môle accompagne les patients ayant besoin d'un taxi conventionné CPAM pour leurs consultations, examens, soins réguliers et déplacements hospitaliers.",
    localHeading: "Un transport médical pensé pour Scionzier et son secteur",
    localCopy: [
      "Nous couvrons Scionzier, Marnaz, Thyez, Cluses et les communes de proximité pour les besoins de transport médical vers les établissements de santé de la Vallée de l'Arve et de la Haute-Savoie.",
      "Notre objectif est de proposer un service fiable, simple à réserver et rassurant, avec une vraie qualité d'accompagnement pour les trajets médicaux du quotidien.",
    ],
    nearbyAreas: ["Marnaz", "Thyez", "Cluses", "Magland"],
    hospitals: [
      "Hôpital de proximité Martel de Janville",
      "Centre Hospitalier Alpes Léman",
      "Hôpitaux du Pays du Mont-Blanc",
    ],
    faq: [
      {
        question: "Peut-on réserver un taxi conventionné depuis Scionzier pour une rééducation ?",
        answer:
          "Oui, les trajets vers les soins de rééducation peuvent être organisés selon la prescription et les conditions de prise en charge.",
      },
      {
        question: "Intervenez-vous aussi dans les communes voisines ?",
        answer:
          "Oui, nous couvrons Scionzier ainsi que les communes alentours pour les besoins de transport médical.",
      },
      {
        question: "Le transport est-il possible pour des rendez-vous répétés ?",
        answer:
          "Oui, nous pouvons planifier des trajets récurrents pour les traitements et suivis médicaux.",
      },
      {
        question: "Comment vérifier qu'un taxi est conventionné ?",
        answer:
          "Un taxi conventionné est agréé par l'Assurance Maladie. Taxi du Môle intervient bien dans ce cadre pour les transports concernés.",
      },
    ],
  },
  {
    slug: "thonon-les-bains",
    label: "Thonon-les-Bains",
    title: "Taxi conventionné CPAM à Thonon-les-Bains",
    description:
      "Taxi du Môle propose un service de taxi conventionné CPAM à Thonon-les-Bains pour les consultations, examens, soins et hospitalisations en Haute-Savoie.",
    intro:
      "Vous recherchez un taxi conventionné CPAM à Thonon-les-Bains pour un déplacement médical ? Taxi du Môle vous accompagne avec un transport assis professionnalisé, confortable et organisé avec sérieux.",
    localHeading: "Des transports médicaux fiables au départ de Thonon-les-Bains",
    localCopy: [
      "Nous intervenons depuis Thonon-les-Bains, Allinges, Publier, Evian et les communes voisines pour les rendez-vous médicaux, les examens, les traitements et les hospitalisations.",
      "Notre service vise à simplifier vos trajets médicaux avec une prise en charge claire, une ponctualité réelle et un accompagnement adapté au profil de chaque patient.",
    ],
    nearbyAreas: ["Allinges", "Publier", "Evian-les-Bains", "Marin"],
    hospitals: [
      "Centre Hospitalier de Thonon-les-Bains",
      "Hôpital Georges-Pianta",
      "Hôpitaux du Léman",
    ],
    faq: [
      {
        question: "Assurez-vous les transports vers l'hôpital de Thonon-les-Bains ?",
        answer:
          "Oui, nous accompagnons les patients vers les établissements de soins du secteur de Thonon et au-delà selon la prescription médicale.",
      },
      {
        question: "Le service couvre-t-il aussi les structures médico-sociales ?",
        answer:
          "Oui, nous pouvons intervenir pour des trajets vers différentes structures médico-sociales lorsque le dossier le justifie.",
      },
      {
        question: "Peut-on réserver un taxi conventionné pour un traitement régulier ?",
        answer:
          "Oui, des transports réguliers peuvent être organisés pour les patients qui suivent un protocole de soins ou un traitement.",
      },
      {
        question: "Le service est-il disponible toute l'année ?",
        answer:
          "Oui, nous intervenons toute l'année avec une organisation adaptée à vos besoins médicaux.",
      },
    ],
  },
  {
    slug: "vetraz-monthoux",
    label: "Vétraz-Monthoux",
    title: "Taxi conventionné CPAM à Vétraz-Monthoux",
    description:
      "Taxi du Môle assure vos transports médicaux conventionnés CPAM à Vétraz-Monthoux avec un service sérieux, confortable et bien organisé.",
    intro:
      "Depuis Vétraz-Monthoux, Taxi du Môle met à disposition un service de taxi conventionné CPAM pour vos déplacements médicaux, consultations spécialisées, examens et soins réguliers.",
    localHeading: "Un service médical de proximité à Vétraz-Monthoux",
    localCopy: [
      "Nous intervenons depuis Vétraz-Monthoux, Cranves-Sales, Juvigny, Annemasse et le secteur proche pour les rendez-vous médicaux et les déplacements liés à la santé.",
      "Notre accompagnement s'appuie sur une organisation simple, une bonne connaissance du secteur et une vraie attention portée à la sérénité du patient pendant le trajet.",
    ],
    nearbyAreas: ["Cranves-Sales", "Juvigny", "Annemasse", "Ville-la-Grand"],
    hospitals: [
      "Hôpital privé Pays de Savoie",
      "Centre Hospitalier Alpes Léman",
      "Centre Hospitalier Annecy Genevois - Saint-Julien-en-Genevois",
    ],
    faq: [
      {
        question: "Puis-je réserver depuis Vétraz-Monthoux pour une consultation à Annemasse ?",
        answer:
          "Oui, nous organisons les trajets médicaux conventionnés CPAM entre Vétraz-Monthoux et les structures de soins du secteur.",
      },
      {
        question: "Le transport est-il pris en charge sans avance de frais ?",
        answer:
          "Le tiers payant peut être possible selon votre dossier et les conditions de prise en charge.",
      },
      {
        question: "Intervenez-vous aussi pour les patients âgés ?",
        answer:
          "Oui, notre service convient tout à fait aux seniors ayant besoin d'un transport médical assis et rassurant.",
      },
      {
        question: "Est-ce un service réservé aux longues distances ?",
        answer:
          "Non, nous assurons aussi bien les trajets locaux que les transports plus longs vers les centres spécialisés.",
      },
    ],
  },
  {
    slug: "ville-la-grand",
    label: "Ville-la-Grand",
    title: "Taxi conventionné CPAM à Ville-la-Grand",
    description:
      "Taxi du Môle accompagne les patients de Ville-la-Grand pour leurs transports médicaux conventionnés CPAM avec un service ponctuel et confortable.",
    intro:
      "Pour vos déplacements médicaux depuis Ville-la-Grand, Taxi du Môle assure un service de taxi conventionné CPAM destiné aux patients qui ont besoin d'un transport assis professionnalisé fiable et bien organisé.",
    localHeading: "Vos transports médicaux depuis Ville-la-Grand et le Genevois haut-savoyard",
    localCopy: [
      "Nous couvrons Ville-la-Grand, Annemasse, Ambilly, Gaillard et les communes proches pour les consultations, soins, examens, hospitalisations et autres déplacements médicaux encadrés.",
      "Notre service vise à offrir une solution claire, confortable et rassurante pour les patients du secteur, avec un vrai soin apporté aux horaires de prise en charge.",
    ],
    nearbyAreas: ["Annemasse", "Ambilly", "Gaillard", "Vétraz-Monthoux"],
    hospitals: [
      "Hôpital privé Pays de Savoie",
      "Centre Hospitalier Alpes Léman",
      "Centre Hospitalier Annecy Genevois - Saint-Julien-en-Genevois",
    ],
    faq: [
      {
        question: "Le service couvre-t-il les trajets entre Ville-la-Grand et le CHAL ?",
        answer:
          "Oui, nous pouvons organiser ce type de trajet médical selon la prescription et les conditions de prise en charge.",
      },
      {
        question: "Peut-on réserver pour un aller-retour le même jour ?",
        answer:
          "Oui, nous pouvons prévoir l'aller-retour en fonction de la nature du rendez-vous et de votre organisation médicale.",
      },
      {
        question: "Le taxi conventionné est-il adapté aux personnes fragiles ?",
        answer:
          "Oui, nous assurons un transport assis professionnalisé avec un accompagnement attentif et un vrai souci de confort.",
      },
      {
        question: "Comment réserver rapidement depuis Ville-la-Grand ?",
        answer:
          "Il suffit de nous contacter avec votre ville de départ, votre destination médicale et votre date de rendez-vous pour organiser la prise en charge.",
      },
    ],
  },
];

export const medicalCityLinks = [...medicalCities]
  .sort((a, b) => a.label.localeCompare(b.label, "fr"))
  .map(({ slug, label }) => ({
    href: `/ville/${slug}`,
    label,
  }));

export function getMedicalCityBySlug(slug: string) {
  return medicalCities.find((city) => city.slug === slug);
}
