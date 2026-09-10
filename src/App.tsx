import { HashRouter } from "react-router";

import type { JSX } from "react";

import ErrorBoundary from "@/components/ErrorBoundary/ErrorBoundary";

import { TemplateRouter } from "@/router/TemplateRouter";

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      {/* HashRouter fungerer på statisk hosting uten server-side rewrite-regler. */}
      <HashRouter>
        <TemplateRouter></TemplateRouter>
      </HashRouter>
    </ErrorBoundary>
  );
}

export default App;
