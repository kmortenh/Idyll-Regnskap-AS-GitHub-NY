import { Outlet } from "react-router";

import type { JSX } from "react";

import Link from "@/components/Link/Link";

import "@/router/PublicRoute.css";

export const PublicRoute = (): JSX.Element => {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link id="brand-link" ariaLabel="Go to Idyll Regnskap AS home" href="/" target="_self">
            <img
              className="site-header__logo"
              src={`${import.meta.env.BASE_URL}image0-header-sharp.png`}
              alt="Idyll Regnskap AS"
            />
          </Link>
          <nav className="site-header__nav" aria-label="Main navigation">
            <Link
              id="nav-services"
              ariaLabel="Se tjenester"
              href="/tjenester"
              target="_self"
              className="site-header__nav-link"
            >
              Tjenester
            </Link>
            <Link
              id="nav-prices"
              ariaLabel="Se priser"
              href="/priser"
              target="_self"
              className="site-header__nav-link"
            >
              Priser
            </Link>
            <Link
              id="nav-systems"
              ariaLabel="Se systemer"
              href="/systemer"
              target="_self"
              className="site-header__nav-link"
            >
              Systemer
            </Link>
            <Link
              id="nav-about"
              ariaLabel="Les om Idyll Regnskap AS"
              href="/om-oss"
              target="_self"
              className="site-header__nav-link"
            >
              Om oss
            </Link>
            <Link
              id="nav-contact"
              ariaLabel="Kontakt Idyll Regnskap AS"
              href="/kontakt"
              target="_self"
              className="site-header__nav-link"
            >
              Kontakt oss
            </Link>
          </nav>
        </div>
      </header>
      <div className="site-content">
        <Outlet />
      </div>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <img
              className="site-footer__logo"
              src={`${import.meta.env.BASE_URL}image1-footer-sharp.png`}
              alt="Idyll Regnskap AS"
            />
          </div>

          <div className="site-footer__contact" aria-label="Kontaktinformasjon">
            <div className="site-footer__item">
              <span className="site-footer__icon" aria-hidden="true">
                &#8962;
              </span>
              <div>
                <span className="site-footer__label">Adresse</span>
                <span>Tveide Næringspark 1, Birkeland</span>
              </div>
            </div>
            <a className="site-footer__item" href="tel:+4748304335">
              <span className="site-footer__icon" aria-hidden="true">
                &#9742;
              </span>
              <div>
                <span className="site-footer__label">Telefon</span>
                <span>+47 48 30 43 35</span>
              </div>
            </a>
            <a className="site-footer__item" href="mailto:post@idyllregnskap.no">
              <span className="site-footer__icon" aria-hidden="true">
                &#9993;
              </span>
              <div>
                <span className="site-footer__label">E-post</span>
                <span>post@idyllregnskap.no</span>
              </div>
            </a>
            <div className="site-footer__item">
              <span className="site-footer__icon" aria-hidden="true">
                #
              </span>
              <div>
                <span className="site-footer__label">Org.nr.</span>
                <span>938 146 632</span>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>&copy; 2026 Idyll Regnskap AS. Alle rettigheter forbeholdt.</span>
          <span>Trygghet. Kontroll. Frihet.</span>
        </div>
      </footer>
    </>
  );
};
