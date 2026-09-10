import type { JSX } from "react";

import "@/pages/SystemsPage/SystemsPage.css";

const systems = [
  {
    name: "Tripletex",
    url: "https://www.tripletex.no/",
    logoUrl: "https://www.tripletex.no/wp-content/uploads/2022/05/logo.svg",
    description:
      "Et komplett skybasert system for regnskap, fakturering, lønn og økonomioppfølging.",
  },
  {
    name: "UniMicro",
    url: "https://www.unimicro.no/",
    logoUrl:
      "https://cdn.sanity.io/images/7bqs683f/production/e8c5485513cd3ff44e311edca8a5c15f5bc09f32-150x28.svg",
    description:
      "Et fleksibelt økonomisystem som gir god oversikt over regnskap, fakturaer og drift.",
  },
  {
    name: "Systima",
    url: "https://www.systima.no/",
    logoUrl: "https://www.systima.no/assets/systima_logo_landscape.png",
    description: "Et moderne system for regnskap, fakturering og økonomioppfølging.",
  },
  {
    name: "Fiken",
    url: "https://www.fiken.no/",
    logoUrl: `${import.meta.env.BASE_URL}fiken-logo.svg`,
    description: "Et enkelt og brukervennlig system for regnskap og fakturering.",
  },
];

const SystemsPage = (): JSX.Element => {
  return (
    <main className="systems-page">
      <section className="systems-page__intro" aria-labelledby="systems-title">
        <p className="systems-page__eyebrow systems-page__page-eyebrow">Systemer</p>
        <h1 id="systems-title">Systemer som gir deg bedre oversikt</h1>
        <p>
          Vi jobber med moderne økonomisystemer som gjør regnskapet enklere å følge opp og
          hverdagen mer oversiktlig.
        </p>
      </section>

      <section className="systems-page__list" aria-labelledby="systems-list-title">
        <div className="systems-page__section-heading">
          <p className="systems-page__eyebrow">Våre systemer</p>
          <h2 id="systems-list-title">Regnskapssystem vi kjenner godt</h2>
        </div>
        <div className="systems-page__grid">
          {systems.map((system) => (
            <article className="systems-page__card" key={system.name}>
              <h3>
                <a href={system.url} target="_blank" rel="noreferrer">
                  {system.logoUrl ? (
                    <img src={system.logoUrl} alt={system.name} />
                  ) : null}
                </a>
              </h3>
              <p>{system.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="systems-page__note" aria-labelledby="systems-note-title">
        <p className="systems-page__eyebrow">Tilpasset din bedrift</p>
        <h2 id="systems-note-title">Riktig system gjør regnskapshverdagen enklere</h2>
        <p>
          Vi hjelper deg med å finne gode rutiner og få mest mulig ut av systemet som passer
          virksomheten din.
        </p>
      </section>
    </main>
  );
};

export default SystemsPage;
