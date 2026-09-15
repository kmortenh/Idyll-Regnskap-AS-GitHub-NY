import type { JSX } from "react";

import Link from "@/components/Link/Link";
import ContactPage from "@/pages/ContactPage/ContactPage";

import "@/pages/HomePage/HomePage.css";

const HomePage = (): JSX.Element => {
  return (
    <main className="home-page">
      <section className="home-page__hero" aria-labelledby="home-title">
        <p className="home-page__eyebrow">Idyll Regnskap AS</p>
        <h1 className="title" id="home-title">
          Regnskapsbyrå på Tveide, Birkeland
        </h1>
        <p className="home-page__intro">
          Lokalt regnskapskontor i Birkenes kommune og omegn. Regnskapstjenester for små og
          mellomstore bedrifter.
        </p>
      </section>

      <section className="home-page__previews" aria-labelledby="previews-title">
        <div className="home-page__section-heading">
          <p className="home-page__eyebrow">Utforsk</p>
          <h2 id="previews-title">Hva kan vi gjøre for deg?</h2>
        </div>
        <div className="home-page__preview-grid">
          <Link
            id="preview-services"
            ariaLabel="Les mer om våre tjenester"
            href="/tjenester"
            target="_self"
            className="home-page__preview"
          >
            <span className="home-page__preview-title">Tjenester</span>
            <span>Regnskap, lønn, rapportering, rådgivgning m.m.</span>
            <span className="home-page__preview-link">Les mer</span>
          </Link>
          <Link
            id="preview-prices"
            ariaLabel="Les mer om våre priser"
            href="/priser"
            target="_self"
            className="home-page__preview"
          >
            <span className="home-page__preview-title">Priser</span>
            <span>Konkurransedyktige priser og løsninger tilpasset virksomheten din.</span>
            <span className="home-page__preview-link">Les mer</span>
          </Link>
          <Link
            id="preview-systems"
            ariaLabel="Les mer om våre systemer"
            href="/systemer"
            target="_self"
            className="home-page__preview"
          >
            <span className="home-page__preview-title">Systemer</span>
            <span>Gode digitale verktøy for en enklere arbeidshverdag.</span>
            <span className="home-page__preview-link">Les mer</span>
          </Link>
          <Link
            id="preview-about"
            ariaLabel="Les mer om Idyll Regnskap AS"
            href="/om-oss"
            target="_self"
            className="home-page__preview"
          >
            <span className="home-page__preview-title">Om oss</span>
            <span>Bli kjent med Idyll Regnskap AS og menneskene bak.</span>
            <span className="home-page__preview-link">Les mer</span>
          </Link>
        </div>
      </section>

      <ContactPage />

      <section className="home-page__statement" id="statement" aria-labelledby="statement-title">
        <p className="home-page__eyebrow">Enklere drift</p>
        <h2 id="statement-title">Vi tar oss av regnskapet. Du tar deg av resten.</h2>
        <p>Trygghet. Kontroll. Frihet.</p>
      </section>
    </main>
  );
};

export default HomePage;
