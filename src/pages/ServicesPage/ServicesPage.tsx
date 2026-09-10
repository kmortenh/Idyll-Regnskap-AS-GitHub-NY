import type { JSX } from "react";

import "@/pages/ServicesPage/ServicesPage.css";

const services = [
  {
    title: "Løpende regnskap",
    description:
      "Bokføring av bilag, fakturering, bankavstemming, betalingsoppfølging, periodisering, avstemming, oppfølging av frister, og andre regnskapsrelaterte tjenester.",
  },
  {
    title: "Lønn",
    description:
      "Lønnskjøring og lønnsutbetaling, a-melding, skatter og avgifter, reiseregninger og utlegg, avstemming, lønnsrapportering, og andre lønnsrelaterte tjenester.",
  },
  {
    title: "Rapportering",
    description:
      "Regnskapsrapportering, budsjettering, likviditet, prosjekt, myndighetsrapportering, og andre rapporteringsrelaterte tjenester.",
  },
  {
    title: "Årsoppgjør",
    description:
      "Årsregnskap, skattemelding og næringsoppgave, aksjonærregisteroppgave, utarbeidelse og innsending, dokumentering og avstemming, og andre årsavslutningsrelaterte tjenester.",
  },
  {
    title: "Rådgivning",
    description:
      "Økonomisk rådgivning, sparring, regnskapsanalysering, likviditetsplanlegging, skattemessig vurdering, kostnadsstyring, selskapsstruktur og andre rådgivningsrelaterte tjenester.",
  },
  {
    title: "Selskapstjenester",
    description:
      "Stiftelse og registrering, endring i selskapsopplysninger, styre- og generalforsamlingsprotokoller, samordnet registermelding, avvikling, og andre selskapsrelaterte tjenester.",
  },
];

const ServicesPage = (): JSX.Element => {
  return (
    <main className="services-page">
      <section className="services-page__intro" aria-labelledby="services-page-title">
        <p className="services-page__eyebrow services-page__page-eyebrow">Tjenester</p>
        <h1 id="services-page-title">Våre tjenester</h1>
        <p>
          Vi tar oss av regnskapet, slik at du får mer tid til å drive virksomheten din.
        </p>
      </section>

      <section className="services-page__list" aria-label="Tjenester">
        <div className="services-page__grid">
          {services.map((service) => (
            <article className="services-page__card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-page__closing" aria-labelledby="services-closing-title">
        <p className="services-page__eyebrow">Tilpasset din bedrift</p>
        <h2 id="services-closing-title">Vi finner en løsning som passer deg</h2>
        <p>
          Ta kontakt, så ser vi på hvordan vi kan gjøre regnskapet enklere og mer oversiktlig.
        </p>
      </section>
    </main>
  );
};

export default ServicesPage;
