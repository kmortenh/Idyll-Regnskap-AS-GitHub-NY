import type { JSX } from "react";

import "@/pages/PrivacyPage/PrivacyPage.css";

const PrivacyPage = (): JSX.Element => {
  return (
    <main className="privacy-page">
      <header className="privacy-page__intro">
        <p className="privacy-page__eyebrow">Personvern</p>
        <h1>Personvern- og cookie-erklæring</h1>
        <p>Sist oppdatert: 15. september 2026</p>
      </header>

      <div className="privacy-page__content">
        <section>
          <h2>Behandlingsansvarlig</h2>
          <p>
            Idyll Regnskap AS er behandlingsansvarlig for personopplysninger som samles inn via
            denne nettsiden.
          </p>
          <address>
            Idyll Regnskap AS
            <br />
            Org.nr. 938 146 632
            <br />
            Tveide Næringspark 1, 4760 Birkeland
            <br />
            <a href="mailto:post@idyllregnskap.no">post@idyllregnskap.no</a>
          </address>
        </section>

        <section>
          <h2>Kontaktskjema</h2>
          <p>
            Når du sender inn kontaktskjemaet, behandler vi navnet ditt, eventuell bedrift,
            e-postadresse, telefonnummer og meldingen din for å kunne svare på henvendelsen.
            Behandlingen er basert på at du selv tar kontakt og er nødvendig for å følge opp
            forespørselen.
          </p>
          <p>
            Skjemaet sendes med EmailJS. Opplysningene brukes kun til å håndtere henvendelsen og
            deles ikke videre utover leverandører som er nødvendige for å levere tjenesten. Ikke
            send sensitive personopplysninger eller taushetsbelagt informasjon gjennom skjemaet.
          </p>
        </section>

        <section>
          <h2>Informasjonskapsler og analyse</h2>
          <p>
            Nettsiden bruker nødvendige tekniske funksjoner for å huske cookie-valget ditt. Disse
            lagres lokalt i nettleseren og brukes ikke til markedsføring.
          </p>
          <p>
            Google Analytics lastes bare dersom du trykker «Godta analyse» i samtykkebanneret.
            Analytics brukes til aggregert statistikk om bruk av nettsiden. Dersom du velger «Kun
            nødvendige», lastes ikke Google Analytics. Du kan når som helst endre valget ditt ved
            å trykke på «Informasjonskapsler» nederst på siden.
          </p>
        </section>

        <section>
          <h2>Lagring og dine rettigheter</h2>
          <p>
            Vi lagrer personopplysninger så lenge det er nødvendig for formålet de ble samlet inn
            for, eller så lenge vi er rettslig forpliktet til det. Du kan be om innsyn, retting,
            sletting eller begrensning av behandlingen. Du kan også protestere mot behandling eller
            be om dataportabilitet når vilkårene for dette er oppfylt.
          </p>
          <p>
            Ta kontakt på <a href="mailto:post@idyllregnskap.no">post@idyllregnskap.no</a> for å
            utøve rettighetene dine. Du har også rett til å klage til Datatilsynet.
          </p>
        </section>

        <section>
          <h2>Endringer</h2>
          <p>
            Denne erklæringen kan bli oppdatert dersom nettsiden, tjenestene eller regelverket
            endres. Datoen øverst viser når erklæringen sist ble oppdatert.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPage;