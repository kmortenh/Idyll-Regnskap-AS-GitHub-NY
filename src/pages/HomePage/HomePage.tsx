import type { JSX } from "react";

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
