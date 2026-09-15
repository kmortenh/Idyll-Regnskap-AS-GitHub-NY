import { FormEvent, useState } from "react";

import type { JSX } from "react";

import emailjs from "emailjs-com";

import "@/pages/ContactPage/ContactPage.css";

const ContactPage = (): JSX.Element => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateName = (name: string): boolean => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      setNameError("Navn er påkrevd.");
      return false;
    }

    if (trimmedName.length < 2) {
      setNameError("Navnet må inneholde minst 2 tegn.");
      return false;
    }

    if (trimmedName.length > 80) {
      setNameError("Navnet kan ikke inneholde mer enn 80 tegn.");
      return false;
    }

    if (!/^[\p{L}\s'-]+$/u.test(trimmedName)) {
      setNameError("Bruk bare bokstaver, mellomrom, bindestrek eller apostrof.");
      return false;
    }

    setNameError("");
    return true;
  };

  const validatePhone = (phone: string): boolean => {
    const digitsOnly = phone.replace(/\D/g, "");

    if (!digitsOnly) {
      setPhoneError("");
      return true;
    }

    if (digitsOnly.length < 8) {
      setPhoneError("Telefonnummeret må inneholde minst 8 siffer.");
      return false;
    }

    setPhoneError("");
    return true;
  };

  const sendViaEmailClient = (formData: FormData): void => {
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");

    if (!validateName(name)) {
      const nameInput = form.querySelector<HTMLInputElement>("#name");

      nameInput?.focus();
      return;
    }

    if (!validatePhone(phone)) {
      const phoneInput = form.querySelector<HTMLInputElement>("#phone");

      phoneInput?.focus();
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      sendViaEmailClient(formData);
      return;
    }

    try {
      setIsSubmitting(true);
      emailjs.init(String(publicKey));
      await emailjs.sendForm(serviceId, templateId, form);
      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS submit failed:", error);
      sendViaEmailClient(formData);
    } finally {
      setIsSubmitting(false);
    }
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
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    minLength={2}
                    maxLength={80}
                    pattern="[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+"
                    required
                    aria-invalid={Boolean(nameError)}
                    aria-describedby={nameError ? "name-error" : undefined}
                    onChange={(event) => validateName(event.target.value)}
                    onBlur={(event) => validateName(event.target.value)}
                  />
                  {nameError ? (
                    <span id="name-error" className="contact-page__error-message">
                      {nameError}
                    </span>
                  ) : null}
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
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="numeric"
                    pattern="[0-9]{8,}"
                    aria-invalid={Boolean(phoneError)}
                    aria-describedby={phoneError ? "phone-error" : undefined}
                    onChange={(event) => {
                      event.target.value = event.target.value.replace(/\D/g, "");
                      validatePhone(event.target.value);
                    }}
                    onBlur={(event) => validatePhone(event.target.value)}
                  />
                  {phoneError ? (
                    <span id="phone-error" className="contact-page__error-message">
                      {phoneError}
                    </span>
                  ) : null}
                </label>
              </div>
              <label className="contact-page__field" htmlFor="message">
                Melding
                <textarea id="message" name="message" rows={6} required />
              </label>
              <button className="contact-page__submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sender..." : "Send melding"}
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
