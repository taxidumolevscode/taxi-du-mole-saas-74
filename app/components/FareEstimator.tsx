"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    __tdmMapsInit?: () => void;
    google?: GoogleMapsRuntime;
  }
}

const MAPS_KEY = "AIzaSyAk3EysKL2LMn3rZuXx55TEzTflNEsOZlY";

type EstimatorState = {
  origin: string;
  destination: string;
};

type GeocoderResult = {
  formatted_address?: string;
};

type DistanceMatrixElement = {
  status?: string;
  distance?: {
    text: string;
    value: number;
  };
};

type DistanceMatrixResponse = {
  rows?: Array<{
    elements?: DistanceMatrixElement[];
  }>;
};

type GoogleMapsRuntime = {
  maps?: {
    Geocoder: new () => {
      geocode: (
        request: { location: { lat: number; lng: number } },
        callback: (results: GeocoderResult[], status: string) => void,
      ) => void;
    };
    DistanceMatrixService: new () => {
      getDistanceMatrix: (
        request: {
          origins: string[];
          destinations: string[];
          travelMode: string;
          unitSystem: string;
        },
        callback: (response: DistanceMatrixResponse, status: string) => void,
      ) => void;
    };
    UnitSystem: {
      METRIC: string;
    };
    places?: {
      Autocomplete: new (input: HTMLInputElement) => unknown;
    };
  };
};

function getRateLabel() {
  const hours = new Date().getHours();

  if (hours >= 19 || hours < 8) {
    return { label: "Tarif Nuit", pricePerKm: 3.66, baseFare: 3 };
  }

  return { label: "Tarif Jour", pricePerKm: 2.4, baseFare: 3 };
}

export function FareEstimator() {
  const [form, setForm] = useState<EstimatorState>({ origin: "", destination: "" });
  const [message, setMessage] = useState(
    "Entrez votre depart et votre destination pour obtenir une estimation rapide.",
  );
  const [mapsReady, setMapsReady] = useState(
    () =>
      typeof window !== "undefined" &&
      Boolean(window.google?.maps?.places),
  );

  useEffect(() => {
    const connectAutocomplete = () => {
      const originInput = document.getElementById("fare-origin") as
        | HTMLInputElement
        | null;
      const destinationInput = document.getElementById("fare-destination") as
        | HTMLInputElement
        | null;

      if (!originInput || !destinationInput || !window.google?.maps?.places) return;

      new window.google.maps.places.Autocomplete(originInput);
      new window.google.maps.places.Autocomplete(destinationInput);
    };

    if (window.google?.maps?.places) {
      connectAutocomplete();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-tdm-google-maps="true"]',
    );

    window.__tdmMapsInit = () => {
      setMapsReady(true);
      connectAutocomplete();
    };

    if (existingScript) return;

    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.dataset.tdmGoogleMaps = "true";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&libraries=places&callback=__tdmMapsInit`;
    document.body.appendChild(script);
  }, []);

  function updateField(key: keyof EstimatorState, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function useCurrentLocation() {
    const googleMaps = window.google?.maps;

    if (!navigator.geolocation || !googleMaps) {
      setMessage("La geolocalisation n'est pas disponible pour le moment.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const geocoder = new googleMaps.Geocoder();
        geocoder.geocode(
          {
            location: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          },
          (results: GeocoderResult[], status: string) => {
            const address = results?.[0]?.formatted_address;

            if (status === "OK" && address) {
              setForm((current) => ({
                ...current,
                origin: address,
              }));
              setMessage("Votre position a ete detectee.");
              return;
            }

            setMessage("Impossible de recuperer votre adresse actuelle.");
          },
        );
      },
      () => setMessage("Autorisation de geolocalisation refusee."),
    );
  }

  function calculateFare() {
    const googleMaps = window.google?.maps;

    if (!form.origin || !form.destination) {
      setMessage("Merci d'indiquer les deux adresses.");
      return;
    }

    if (!googleMaps?.DistanceMatrixService) {
      setMessage("Google Maps ne s'est pas charge correctement.");
      return;
    }

    const rates = getRateLabel();
    const service = new googleMaps.DistanceMatrixService();

    service.getDistanceMatrix(
      {
        origins: [form.origin],
        destinations: [form.destination],
        travelMode: "DRIVING",
        unitSystem: googleMaps.UnitSystem.METRIC,
      },
      (response: DistanceMatrixResponse, status: string) => {
        if (status !== "OK") {
          setMessage(`Erreur Google Maps : ${status}`);
          return;
        }

        const result = response?.rows?.[0]?.elements?.[0];
        if (!result || result.status !== "OK" || !result.distance) {
          setMessage("Adresse non reconnue par Google Maps.");
          return;
        }

        const km = result.distance.value / 1000;
        const price = rates.baseFare + km * rates.pricePerKm;

        setMessage(
          `${rates.label} • ${result.distance.text} • Estimation : ${price.toFixed(2)} EUR`,
        );
      },
    );
  }

  return (
    <div className="rounded-[32px] border border-black/10 bg-white/75 p-4 shadow-[24px_24px_60px_rgba(17,17,17,0.08),-18px_-18px_40px_rgba(255,255,255,0.94)] backdrop-blur-xl">
      <div className="rounded-[28px] border border-white/70 bg-[#f8f6ee] p-6 shadow-[inset_1px_1px_0_rgba(255,255,255,0.9),inset_-1px_-1px_0_rgba(17,17,17,0.06)]">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-black/45">
              Devis Sur Mesure
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-black">
              Estimation Tarifaire
            </h3>
          </div>
          <div className="rounded-full border border-black/10 bg-black px-4 py-2 text-xs font-semibold text-white">
            {mapsReady ? "GPS Actif" : "Chargement Maps"}
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-[24px] border border-black/10 bg-white p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            <label className="mb-2 block text-sm font-semibold text-black/75">
              Lieu De Prise En Charge
            </label>
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 rounded-full border-2 border-black" />
              <input
                id="fare-origin"
                className="h-11 w-full bg-transparent text-sm outline-none"
                onChange={(event) => updateField("origin", event.target.value)}
                placeholder="Adresse de depart"
                value={form.origin}
              />
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb600] text-lg"
                onClick={useCurrentLocation}
                type="button"
              >
                📍
              </button>
            </div>
          </div>

          <div className="rounded-[24px] border border-black/10 bg-white p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
            <label className="mb-2 block text-sm font-semibold text-black/75">
              Destination
            </label>
            <div className="flex items-center gap-3">
              <span className="h-4 w-4 rounded-[4px] border-2 border-black" />
              <input
                id="fare-destination"
                className="h-11 w-full bg-transparent text-sm outline-none"
                onChange={(event) =>
                  updateField("destination", event.target.value)
                }
                placeholder="Hôpital, clinique, gare, aéroport..."
                value={form.destination}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            className="inline-flex h-[52px] items-center justify-center rounded-full bg-black px-6 font-bold text-[#ffb600] shadow-[0_16px_30px_rgba(17,17,17,0.22)] hover:-translate-y-0.5"
            onClick={calculateFare}
            type="button"
          >
            Voir Les Prix
          </button>
          <a
            className="inline-flex h-[52px] items-center justify-center rounded-full border border-black/10 bg-white px-6 text-center font-semibold text-black hover:-translate-y-0.5"
            href="tel:+33680423031"
          >
            Appeler Le 06 80 42 30 31
          </a>
        </div>

        <div className="mt-4 rounded-[24px] border border-black/10 bg-[#fff7db] px-4 py-3 text-sm font-medium text-black/75">
          {message}
        </div>
      </div>
    </div>
  );
}
