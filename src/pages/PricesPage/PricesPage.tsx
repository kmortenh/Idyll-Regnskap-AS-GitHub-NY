import type { JSX } from "react";

import "@/pages/PricesPage/PricesPage.css";

const PricesPage = (): JSX.Element => {
  return (
    <main className="prices-page">
      <section className="prices-page__intro" aria-labelledby="prices-title">
        <p className="prices-page__eyebrow prices-page__page-eyebrow">Priser</p>
        <h1 id="prices-title">Våre priser</h1>
        <p>
          Vi skal være konkurransedyktige på pris. Ta kontakt, så ser vi på hvilke løsninger som
          passer for deg.
        </p>
      </section>

      <section className="prices-page__base" aria-labelledby="base-title">
        <div>
          <p className="prices-page__eyebrow">Timepris</p>
          <h2 id="base-title">Regnskap på timebasis</h2>
          <p>En fleksibel løsning for deg som ønsker hjelp etter behov.</p>
        </div>
        <div className="prices-page__base-price">
          <strong>Timepris</strong>
          <span>etter avtale</span>
        </div>
      </section>

      <section className="prices-page__base prices-page__annual" aria-labelledby="fixed-title">
        <div>
          <p className="prices-page__eyebrow">Fastpris</p>
          <h2 id="fixed-title">Regnskap på fastpris</h2>
          <p>En forutsigbar løsning tilpasset behovene dine.</p>
        </div>
        <div className="prices-page__base-price">
          <strong>Fast pris</strong>
          <span>etter avtale</span>
        </div>
      </section>

      <section className="prices-page__base prices-page__annual" aria-labelledby="annual-title">
        <div>
          <p className="prices-page__eyebrow">Årsoppgjørpris</p>
          <h2 id="annual-title">Årsoppgjør og skattemelding</h2>
          <p>Egne faste priser på årsoppgjør og skattemelding, tilpasset virksomheten din.</p>
        </div>
        <div className="prices-page__base-price">
          <strong>Fast pris</strong>
          <span>etter avtale</span>
        </div>
      </section>

      <section className="prices-page__base prices-page__annual" aria-labelledby="system-title">
        <div>
          <p className="prices-page__eyebrow">Systempris</p>
          <h2 id="system-title">System på fastpris</h2>
          <p>
            Systempriser etter avtale. Regnskapssystem - Årsoppgjørssystem - Faktureringssystem -
            Lønnssystem.
          </p>
        </div>
        <div className="prices-page__base-price">
          <strong>Fast pris</strong>
          <span>etter avtale</span>
        </div>
      </section>

      <section className="prices-page__calculator" aria-labelledby="calculator-title">
        <div>
          <p className="prices-page__eyebrow">Fastpris</p>
          <h2 id="calculator-title">Fastpriskalkulator</h2>
          <p>Kommer snart. Under utviklling. Ta kontakt for tilbud.</p>
        </div>
        <div className="prices-page__calculator-preview" aria-label="Forhåndsvisning av fastpriskalkulator">
          <div className="prices-page__preview-form">
            <span>MVA-registrert</span>
            <span>Antall ansatte</span>
            <span>Fakturaer per måned</span>
            <span>Bankposter per måned</span>
          </div>
          <div className="prices-page__preview-summary">
            <span>Estimert månedspris</span>
            <strong>Fast pris</strong>
            <small>etter avtale</small>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricesPage;
