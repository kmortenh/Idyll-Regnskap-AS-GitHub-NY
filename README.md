# Idyll Regnskap AS

En enkel og moderne landingsside for Idyll Regnskap AS, bygget med React,
TypeScript og Vite. Siden inneholder en prisestimatkalkulator for
regnskapstjenester og er tilpasset statisk publisering på GitHub Pages.

## Kom i gang

Krever Node.js-versjonen som står i `.nvmrc`.

```bash
npm ci
npm run dev
```

Utviklingsserveren kjører på `http://localhost:3000`.

## Kvalitetssjekker

Kjør disse før du publiserer endringer:

```bash
npm run lint
npm run type-check
npm test -- --runInBand
npm run build
npm audit
```

## GitHub Pages

Prosjektet bruker `HashRouter`, slik at navigasjonen fungerer på statisk
hosting uten server-side rewrite-regler. Vite bygger med relative asset-stier
via `base: "./"`, som gjør prosjektet kompatibelt med en GitHub Pages-adresse
som `https://bruker.github.io/Prosjektnavn/`.

1. Push til `main`.
2. GitHub Actions kjører workflowen `Deploy to GitHub Pages`.
3. Velg **GitHub Actions** som kilde under repositoryets Pages-innstillinger.

Workflowen bruker kun nødvendige rettigheter: lesetilgang til innhold,
skrivetilgang til Pages og OIDC-token for deploy. Ikke legg passord, API-nøkler
eller andre hemmeligheter i frontend-kode eller `VITE_`-variabler; Vite bygger
alle slike variabler inn i JavaScript-bundlen som blir offentlig.

## Struktur

- `src/pages/HomePage/`: landingpage og tjenesteseksjoner
- `src/pages/CalculatorPage/`: prisestimatkalkulator
- `src/router/`: statiske routes og felles layout med header/footer
- `src/styles/`: globale farger, typografi og grunnstil
- `public/`: manifest, favicon og robots-regler
- `.github/workflows/`: CI og GitHub Pages-deploy

Kontaktverdiene i footeren er eksempelverdier og må erstattes før publisering.