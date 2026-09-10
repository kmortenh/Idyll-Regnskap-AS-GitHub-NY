import type { JSX } from "react";

import AboutPage from "@/pages/AboutPage/AboutPage";
import ContactPage from "@/pages/ContactPage/ContactPage";
import PricesPage from "@/pages/PricesPage/PricesPage";
import SystemsPage from "@/pages/SystemsPage/SystemsPage";

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
          Regnskap for små og mellomstore bedrifter. Vi har kontroll på tallene, slik at du får tid
          til resten.
        </p>
      </section>

      <section className="home-page__services" aria-labelledby="services-title">
        <div className="home-page__section-heading">
          <p className="home-page__eyebrow">Tjenester</p>
          <h2 id="services-title">Våre tjenester</h2>
        </div>
        <div className="home-page__service-grid" id="services">
          <article className="home-page__service">
            <h3>Løpende regnskap</h3>
            <p>
              Bokføring av bilag, fakturering, bankavstemming, betalingsoppfølging, periodisering,
              avstemming, oppfølging av frister, og andre regnskapsrelaterte tjenester.
            </p>
          </article>
          <article className="home-page__service">
            <h3>Lønn</h3>
            <p>
              Lønnskjøring og lønnsutbetaling, a-melding, skatter og avgifter, reiseregninger og
              utlegg, avstemming, lønnsrapportering, og andre lønnsrelaterte tjenester.
            </p>
          </article>
          <article className="home-page__service">
            <h3>Rapportering</h3>
            <p>
              Regnskapsrapportering, budsjettering, likviditet, prosjekt, myndighetsrapportering,
              og andre rapporteringsrelaterte tjenester.
            </p>
          </article>
          <article className="home-page__service">
            <h3>Årsoppgjør</h3>
            <p>
              Årsregnskap, skattemelding og næringsoppgave, aksjonærregisteroppgave, utarbeidelse
              og innsending, dokumentering og avstemming, og andre årsavslutningsrelaterte
              tjenester.
            </p>
          </article>
          <article className="home-page__service">
            <h3>Rådgivning</h3>
            <p>
              Økonomisk rådgivning, sparring, regnskapsanalysering, likviditetsplanlegging,
              skattemessig vurdering, konstnadsstyring, selskapsstruktur og andre
              rådgivningsrelaterte tjenester.
            </p>
          </article>
          <article className="home-page__service">
            <h3>Selskapstjenester</h3>
            <p>
              Stiftelse og registrering, endring i selskapsopplysninger, styre- og
              generalforsamlingsprotokoller, samordnet registermelding, avvikling, og andre
              selskapsrelaterte tjenester.
            </p>
          </article>
        </div>
      </section>

      <PricesPage />
      <SystemsPage />
      <AboutPage />
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
