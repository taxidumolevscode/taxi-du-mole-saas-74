export type RoutePageEntry = {
  slug: string;
  from: string;
  to: string;
  fromSlug?: string;
  toType: "city" | "airport" | "hospital" | "region";
  toSlug?: string;
  title: string;
  description: string;
  intro: string;
  benefits: string[];
  voiceAnswers: Array<{ question: string; answer: string }>;
  faq: Array<{ question: string; answer: string }>;
  nearbyStarts: string[];
  relatedHospitalNames: string[];
  keywords: string[];
};

export const routePages: RoutePageEntry[] = [
  {
    slug: "bonneville-geneve",
    from: "Bonneville",
    to: "Genève",
    fromSlug: "bonneville",
    toType: "region",
    title: "Taxi Bonneville Genève | Transfert fiable et médical",
    description:
      "Taxi du Môle assure les trajets entre Bonneville et Genève avec un service ponctuel, confortable et adapté aux transferts privés comme aux rendez-vous médicaux.",
    intro:
      "Vous cherchez un taxi entre Bonneville et Genève pour un transfert longue distance, un rendez-vous médical, une gare ou un aéroport ? Taxi du Môle propose une prise en charge claire, locale et rassurante depuis la vallée de l'Arve.",
    benefits: [
      "Départ ponctuel depuis Bonneville et le secteur proche.",
      "Trajet confortable vers Genève, ses gares et son bassin médical.",
      "Réservation simple par téléphone avec confirmation rapide.",
    ],
    voiceAnswers: [
      {
        question: "Combien de temps faut-il pour aller de Bonneville à Genève en taxi ?",
        answer:
          "Le temps de trajet dépend du trafic et du point exact d'arrivée, mais le service est organisé à l'avance pour sécuriser votre horaire de rendez-vous ou de départ.",
      },
      {
        question: "Peut-on réserver un taxi Bonneville Genève tôt le matin ?",
        answer:
          "Oui, le trajet peut être planifié selon votre horaire, notamment pour les départs vers la Suisse, les gares ou les établissements de santé.",
      },
    ],
    faq: [
      {
        question: "Le service couvre-t-il aussi les communes autour de Bonneville ?",
        answer:
          "Oui, le départ peut être organisé depuis Bonneville et les communes proches selon votre demande.",
      },
      {
        question: "Ce trajet convient-il à un transport médical ?",
        answer:
          "Oui, selon la prescription et les conditions de prise en charge, un trajet médical assis peut être organisé vers Genève ou son secteur.",
      },
      {
        question: "Puis-je réserver un aller-retour Bonneville Genève ?",
        answer:
          "Oui, l'aller-retour peut être prévu dès la réservation pour sécuriser l'organisation du déplacement.",
      },
      {
        question: "Quel numéro appeler pour réserver ?",
        answer:
          "La réservation se fait directement au 06 80 42 30 31 avec confirmation rapide du trajet.",
      },
    ],
    nearbyStarts: ["Ayse", "Marignier", "La Roche-sur-Foron"],
    relatedHospitalNames: ["Centre Hospitalier Alpes Léman"],
    keywords: [
      "taxi Bonneville Genève",
      "transfert Bonneville Genève",
      "taxi médical Bonneville Genève",
      "prix taxi Bonneville Genève",
    ],
  },
  {
    slug: "sallanches-geneve",
    from: "Sallanches",
    to: "Genève",
    fromSlug: "sallanches",
    toType: "region",
    title: "Taxi Sallanches Genève | Réservation longue distance",
    description:
      "Réservez un taxi entre Sallanches et Genève avec Taxi du Môle pour un transfert confortable vers la Suisse, une gare, un aéroport ou un rendez-vous médical.",
    intro:
      "Depuis Sallanches, Taxi du Môle organise vos déplacements vers Genève avec une vraie logique de ponctualité, de confort et d'accompagnement sur les trajets réguliers ou ponctuels.",
    benefits: [
      "Service longue distance au départ de Sallanches.",
      "Solution adaptée pour Genève centre, gare ou aéroport.",
      "Organisation claire pour les patients et les voyageurs.",
    ],
    voiceAnswers: [
      {
        question: "Existe-t-il un taxi Sallanches Genève pour l'aéroport ?",
        answer:
          "Oui, Taxi du Môle peut organiser un départ depuis Sallanches vers Genève Aéroport avec un horaire préparé en amont.",
      },
      {
        question: "Le service est-il adapté aux longues distances ?",
        answer:
          "Oui, le service est justement pensé pour les trajets interurbains et longue distance au départ de Haute-Savoie.",
      },
    ],
    faq: [
      {
        question: "Le taxi peut-il partir de Megève ou Passy ?",
        answer:
          "Oui, selon la demande, le départ peut être organisé dans le secteur proche de Sallanches.",
      },
      {
        question: "Peut-on réserver pour un rendez-vous médical à Genève ?",
        answer:
          "Oui, si la situation le justifie, un trajet vers Genève peut être organisé dans le cadre d'un transport médical.",
      },
      {
        question: "Le trajet est-il confirmé à l'avance ?",
        answer:
          "Oui, chaque réservation fait l'objet d'une validation claire avec les informations utiles de départ et d'arrivée.",
      },
      {
        question: "Comment réserver rapidement ?",
        answer:
          "Il suffit d'appeler le 06 80 42 30 31 pour transmettre votre besoin et obtenir une réponse rapide.",
      },
    ],
    nearbyStarts: ["Megève", "Passy", "Domancy"],
    relatedHospitalNames: ["Hôpitaux du Pays du Mont-Blanc"],
    keywords: [
      "taxi Sallanches Genève",
      "taxi aéroport Genève Sallanches",
      "transfert Sallanches Genève",
      "taxi médical Sallanches Genève",
    ],
  },
  {
    slug: "cluses-annecy",
    from: "Cluses",
    to: "Annecy",
    fromSlug: "cluses",
    toType: "city",
    toSlug: "annecy",
    title: "Taxi Cluses Annecy | Transport privé et médical",
    description:
      "Taxi du Môle assure vos trajets entre Cluses et Annecy pour les consultations, hospitalisations, gares, cliniques et déplacements longue distance.",
    intro:
      "Le trajet Cluses Annecy fait partie des demandes fréquentes pour les soins, les rendez-vous spécialisés et les transferts organisés depuis la vallée de l'Arve vers le bassin annécien.",
    benefits: [
      "Départ depuis Cluses, Scionzier, Thyez et alentours.",
      "Trajet confortable vers Annecy, ses cliniques et sa gare.",
      "Solution claire pour les besoins ponctuels ou réguliers.",
    ],
    voiceAnswers: [
      {
        question: "Peut-on réserver un taxi de Cluses à Annecy pour une clinique ?",
        answer:
          "Oui, ce type de trajet est fréquent et peut être organisé vers Annecy ou son secteur médical.",
      },
      {
        question: "Le taxi Cluses Annecy est-il possible pour un suivi régulier ?",
        answer:
          "Oui, des trajets répétés peuvent être prévus selon la situation et l'organisation des soins.",
      },
    ],
    faq: [
      {
        question: "Le trajet couvre-t-il aussi le retour Annecy vers Cluses ?",
        answer:
          "Oui, l'aller-retour peut être anticipé dès la prise de contact.",
      },
      {
        question: "Peut-on partir de Marnaz ou Scionzier ?",
        answer:
          "Oui, le départ peut être organisé dans le secteur de Cluses et des communes proches.",
      },
      {
        question: "Ce trajet peut-il être conventionné ?",
        answer:
          "Oui, selon la prescription médicale et les conditions de prise en charge applicables.",
      },
      {
        question: "Quel est le contact direct ?",
        answer:
          "Le 06 80 42 30 31 permet de réserver rapidement votre trajet.",
      },
    ],
    nearbyStarts: ["Scionzier", "Thyez", "Marnaz"],
    relatedHospitalNames: ["Clinique Générale d'Annecy", "Centre Hospitalier Annecy Genevois"],
    keywords: [
      "taxi Cluses Annecy",
      "taxi conventionné Cluses Annecy",
      "transport médical Cluses Annecy",
      "taxi gare Annecy depuis Cluses",
    ],
  },
  {
    slug: "annecy-aeroport-geneve",
    from: "Annecy",
    to: "Aéroport de Genève",
    fromSlug: "annecy",
    toType: "airport",
    title: "Taxi Annecy Aéroport de Genève | Transfert direct",
    description:
      "Taxi du Môle propose un transfert Annecy Aéroport de Genève confortable, ponctuel et adapté aux départs matinaux comme aux retours tardifs.",
    intro:
      "Pour un vol, un retour international ou un déplacement professionnel, le trajet Annecy Aéroport de Genève demande une organisation fiable. Taxi du Môle accompagne ces transferts avec un service clair et local.",
    benefits: [
      "Prise en charge ponctuelle depuis Annecy et son agglomération.",
      "Transfert direct vers Genève Aéroport.",
      "Réservation facile pour départs anticipés ou retours planifiés.",
    ],
    voiceAnswers: [
      {
        question: "Peut-on réserver un taxi Annecy Genève Aéroport très tôt ?",
        answer:
          "Oui, le transfert peut être planifié selon l'heure de convocation ou l'heure de vol.",
      },
      {
        question: "Le chauffeur peut-il déposer au terminal ?",
        answer:
          "Oui, l'arrivée est organisée au plus près de la zone utile selon les conditions d'accès du moment.",
      },
    ],
    faq: [
      {
        question: "Le service couvre-t-il aussi Seynod et Cran-Gevrier ?",
        answer:
          "Oui, le départ peut être organisé depuis Annecy et les communes de l'agglomération proche.",
      },
      {
        question: "Peut-on réserver un retour depuis l'aéroport ?",
        answer:
          "Oui, un retour Aéroport de Genève vers Annecy peut être prévu à l'avance.",
      },
      {
        question: "Le service est-il adapté aux bagages ?",
        answer:
          "Oui, il suffit de préciser vos besoins lors de la réservation afin d'organiser le véhicule au mieux.",
      },
      {
        question: "Comment réserver ?",
        answer:
          "Il suffit d'appeler le 06 80 42 30 31 pour réserver votre transfert.",
      },
    ],
    nearbyStarts: ["Seynod", "Cran-Gevrier", "Meythet"],
    relatedHospitalNames: ["Centre Hospitalier Annecy Genevois"],
    keywords: [
      "taxi Annecy aéroport Genève",
      "transfert Annecy Genève aéroport",
      "taxi Annecy GVA",
      "chauffeur Annecy aéroport Genève",
    ],
  },
  {
    slug: "bonneville-lyon",
    from: "Bonneville",
    to: "Lyon",
    fromSlug: "bonneville",
    toType: "region",
    title: "Taxi Bonneville Lyon | Longue distance et médical",
    description:
      "Taxi du Môle organise vos trajets entre Bonneville et Lyon pour les hôpitaux, cliniques, gares et déplacements longue distance.",
    intro:
      "Le trajet Bonneville Lyon concerne souvent des rendez-vous hospitaliers, des consultations spécialisées ou des déplacements longue distance. Taxi du Môle propose un service rassurant et structuré pour ces besoins.",
    benefits: [
      "Trajets longue distance vers Lyon et ses hôpitaux.",
      "Organisation claire pour les patients et les accompagnants.",
      "Réservation directe avec validation rapide.",
    ],
    voiceAnswers: [
      {
        question: "Peut-on aller de Bonneville à Lyon en taxi pour un hôpital ?",
        answer:
          "Oui, ce type de déplacement fait partie des trajets régulièrement organisés selon votre situation et votre destination.",
      },
      {
        question: "Le trajet Bonneville Lyon peut-il être conventionné ?",
        answer:
          "Oui, un transport conventionné peut être possible selon la prescription et les règles de prise en charge.",
      },
    ],
    faq: [
      {
        question: "Les grands centres hospitaliers de Lyon sont-ils desservis ?",
        answer:
          "Oui, selon la demande, les centres hospitaliers et cliniques de Lyon peuvent être desservis.",
      },
      {
        question: "Peut-on réserver une sortie d'hospitalisation ?",
        answer:
          "Oui, les entrées et sorties d'hospitalisation peuvent être organisées à l'avance.",
      },
      {
        question: "Le service couvre-t-il aussi La Roche-sur-Foron ?",
        answer:
          "Oui, le départ peut être planifié sur Bonneville et des communes proches.",
      },
      {
        question: "Quel est le numéro pour réserver ?",
        answer:
          "Vous pouvez réserver au 06 80 42 30 31.",
      },
    ],
    nearbyStarts: ["La Roche-sur-Foron", "Marignier", "Cluses"],
    relatedHospitalNames: ["Centre Léon Bérard de Lyon", "Hôpital Lyon Sud"],
    keywords: [
      "taxi Bonneville Lyon",
      "taxi conventionné Bonneville Lyon",
      "transport médical Bonneville Lyon",
      "taxi hôpital Lyon depuis Bonneville",
    ],
  },
  {
    slug: "thonon-les-bains-geneve",
    from: "Thonon-les-Bains",
    to: "Genève",
    fromSlug: "thonon-les-bains",
    toType: "region",
    title: "Taxi Thonon-les-Bains Genève | Liaison directe",
    description:
      "Taxi du Môle assure vos trajets entre Thonon-les-Bains et Genève avec un service confortable pour la gare, l'aéroport, les rendez-vous médicaux et les longues distances.",
    intro:
      "Depuis Thonon-les-Bains, Genève représente une destination fréquente pour les consultations, les déplacements professionnels et les transferts vers la Suisse. Taxi du Môle propose une prise en charge fiable et locale.",
    benefits: [
      "Service direct depuis Thonon-les-Bains et le Chablais.",
      "Transfert vers Genève ville, gare ou aéroport.",
      "Réservation claire avec horaire confirmé.",
    ],
    voiceAnswers: [
      {
        question: "Existe-t-il un taxi Thonon Genève pour l'aéroport ?",
        answer:
          "Oui, ce transfert peut être organisé à l'avance avec une heure de départ adaptée à votre vol.",
      },
      {
        question: "Peut-on réserver pour un rendez-vous médical en Suisse ?",
        answer:
          "Oui, selon votre situation et la destination précise, le trajet peut être planifié.",
      },
    ],
    faq: [
      {
        question: "Le service couvre-t-il Évian et Publier ?",
        answer:
          "Oui, le départ peut être prévu sur Thonon-les-Bains et les communes proches du Chablais.",
      },
      {
        question: "Le trajet est-il adapté aux longues distances ?",
        answer:
          "Oui, la liaison vers Genève fait partie des trajets interurbains régulièrement pris en charge.",
      },
      {
        question: "Peut-on organiser un aller-retour dans la journée ?",
        answer:
          "Oui, selon votre besoin, un aller-retour peut être réservé dès le premier contact.",
      },
      {
        question: "Comment réserver rapidement ?",
        answer:
          "La réservation directe se fait au 06 80 42 30 31.",
      },
    ],
    nearbyStarts: ["Évian-les-Bains", "Publier", "Allinges"],
    relatedHospitalNames: ["Hôpital Georges-Pianta", "Hôpitaux du Léman"],
    keywords: [
      "taxi Thonon Genève",
      "taxi Thonon-les-Bains Genève",
      "transfert Thonon Genève",
      "taxi aéroport Genève Thonon",
    ],
  },
];

export function getRoutePageBySlug(slug: string) {
  return routePages.find((route) => route.slug === slug);
}
