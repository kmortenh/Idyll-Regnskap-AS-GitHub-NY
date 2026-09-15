import { useEffect, useState } from "react";

import type { JSX } from "react";

import "@/components/CookieConsent/CookieConsent.css";

const consentStorageKey = "idyll-cookie-consent";
const analyticsMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

type ConsentChoice = "accepted" | "rejected";

const loadAnalytics = (): void => {
  if (!analyticsMeasurementId || document.querySelector("#google-analytics-script")) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args);
  };
  window.gtag("js", new Date());

  const script = document.createElement("script");
  script.id = "google-analytics-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsMeasurementId}`;
  script.onload = () => {
    window.gtag("config", analyticsMeasurementId, { send_page_view: true });
  };
  document.head.appendChild(script);
};

const CookieConsent = (): JSX.Element => {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(consentStorageKey) as ConsentChoice | null;

    setChoice(savedChoice);
    if (savedChoice === "accepted") {
      loadAnalytics();
    }
  }, []);

  const saveChoice = (nextChoice: ConsentChoice): void => {
    window.localStorage.setItem(consentStorageKey, nextChoice);
    setChoice(nextChoice);
    setIsOpen(false);

    if (nextChoice === "accepted") {
      loadAnalytics();
    }
  };

  if (choice && !isOpen) {
    return (
      <button className="cookie-consent__settings" type="button" onClick={() => setIsOpen(true)}>
        Informasjonskapsler
      </button>
    );
  }

  return (
    <section className="cookie-consent" aria-labelledby="cookie-consent-title">
      <div className="cookie-consent__content">
        <p className="cookie-consent__eyebrow">Personvern</p>
        <h2 id="cookie-consent-title">Vi bruker informasjonskapsler</h2>
        <p>
          Vi bruker nødvendige informasjonskapsler for at siden skal fungere. Med ditt samtykke
          kan vi også bruke analyseverktøy for å forstå hvordan siden brukes. Du kan endre valget
          ditt når som helst. Se vår <a href="#/personvern">personvern- og cookie-erklæring</a>.
        </p>
      </div>
      <div className="cookie-consent__actions">
        <button type="button" className="cookie-consent__button cookie-consent__button--secondary" onClick={() => saveChoice("rejected")}>
          Kun nødvendige
        </button>
        <button type="button" className="cookie-consent__button cookie-consent__button--primary" onClick={() => saveChoice("accepted")}>
          Godta
        </button>
      </div>
    </section>
  );
};

export default CookieConsent;