import type { JSX } from "react";

import "@/pages/AboutPage/AboutPage.css";

const AboutPage = (): JSX.Element => {
  return (
    <main className="about-page">
      <section className="about-page__intro" aria-labelledby="about-title">
        <p className="about-page__eyebrow about-page__page-eyebrow">Om oss</p>
        <h1 id="about-title">Et lokalt regnskapsbyrå på Birkeland</h1>
        <p>
          Vi hjelper små og mellomstore bedrifter i Birkenes kommune og nærliggende kommuner med å
          få kontroll på tallene, slik at de får mer tid til å drive virksomheten sin.
        </p>
      </section>

      <section className="about-page__team" aria-labelledby="team-title">
        <div className="about-page__section-heading">
          <p className="about-page__eyebrow" id="team-title">Menneskene bak regnskapet</p>
        </div>
        <article className="about-page__employee">
          <div className="about-page__employee-avatar" aria-hidden="true">
            MH
          </div>
          <div>
            <p className="about-page__employee-role">Daglig leder / Statsautorisert regnskapsfører</p>
            <h3>Morten Hornnes</h3>
            <a href="mailto:morten@idyllregnskap.no">morten@idyllregnskap.no</a>
          </div>
        </article>
      </section>

    </main>
  );
};

export default AboutPage;
