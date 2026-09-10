import { FormEvent, useState } from "react";

import type { JSX } from "react";

import "@/pages/ContactPage/ContactPage.css";

const ContactPage = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const company = String(formData.get("company") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");
    const body = [
      `Navn: ${name}`,
      `Bedrift: ${company}`,
      `E-post: ${email}`,
      `Telefon: ${phone || "Ikke oppgitt"}`,
      "",
      "Melding:",
      message,
    ].join("\n");

    window.location.href = `mailto:post@idyllregnskap.no?subject=${encodeURIComponent(
      "Forespørsel fra kontaktskjema",
    )}&body=${encodeURIComponent(body)}`;
    setIsSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-page__intro" aria-labelledby="contact-title">
        <p className="contact-page__eyebrow contact-page__page-eyebrow">Kontakt oss</p>
        <h1 id="contact-title">La oss snakke om bedriften din</h1>
        <p>
          Fyll ut skjemaet, så tar vi kontakt for en uforpliktende prat om hvordan vi kan hjelpe
          deg med regnskapet.
        </p>
      </section>

      <div className="contact-page__layout">
        <section className="contact-page__form-panel" aria-labelledby="form-title">
          <div className="contact-page__section-heading">
            <span className="contact-page__step">01</span>
            <div>
              <p className="contact-page__eyebrow">Send en forespørsel</p>
              <h2 id="form-title">Hvordan kan vi hjelpe?</h2>
            </div>
          </div>

          {isSubmitted ? (
            <div className="contact-page__success" role="status">
              <h2>E-postklienten er åpnet</h2>
              <p>Kontroller innholdet og trykk send for å sende meldingen til oss.</p>
              <button type="button" onClick={() => setIsSubmitted(false)}>
                Send en ny melding
              </button>
            </div>
          ) : (
            <form className="contact-page__form" onSubmit={handleSubmit}>
              <div className="contact-page__field-row">
                <label className="contact-page__field" htmlFor="name">
                  Navn
                  <input id="name" name="name" type="text" autoComplete="name" required />
                </label>
                <label className="contact-page__field" htmlFor="company">
                  Bedrift
                  <input id="company" name="company" type="text" autoComplete="organization" required />
                </label>
              </div>
              <div className="contact-page__field-row">
                <label className="contact-page__field" htmlFor="email">
                  E-post
                  <input id="email" name="email" type="email" autoComplete="email" required />
                </label>
                <label className="contact-page__field" htmlFor="phone">
                  Telefon
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                </label>
              </div>
              <label className="contact-page__field" htmlFor="message">
                Melding
                <textarea id="message" name="message" rows={6} required />
              </label>
              <button className="contact-page__submit" type="submit">
                Send melding
              </button>
            </form>
          )}
        </section>

        <aside className="contact-page__details" aria-labelledby="details-title">
          <p className="contact-page__eyebrow">Direkte kontakt</p>
          <h2 id="details-title">Vi er her for deg</h2>
          <p>Du kan også kontakte oss direkte. Vi svarer normalt innen én arbeidsdag.</p>
          <a href="mailto:post@idyllregnskap.no">
            <span>E-post</span>
            post@idyllregnskap.no
          </a>
          <a href="tel:48304335">
            <span>Telefon</span>
            48304335
          </a>
        </aside>
      </div>
    </main>
  );
};

export default ContactPage;
