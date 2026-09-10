import { Routes, Route, Navigate } from "react-router";

import type { JSX } from "react";

import { PublicRoute } from "@/router/PublicRoute";

import HomePage from "@/pages/HomePage/HomePage";
import ContactPage from "@/pages/ContactPage/ContactPage";
import ServicesPage from "@/pages/ServicesPage/ServicesPage";
import PricesPage from "@/pages/PricesPage/PricesPage";
import SystemsPage from "@/pages/SystemsPage/SystemsPage";
import AboutPage from "@/pages/AboutPage/AboutPage";

export const TemplateRouter = (): JSX.Element => {
  return (
    <Routes>
      {/* PublicRoute samler header, footer og alle offentlige sider på ett sted. */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/tjenester" element={<ServicesPage></ServicesPage>}></Route>
        <Route path="/kontakt" element={<ContactPage></ContactPage>}></Route>
        <Route path="/priser" element={<PricesPage></PricesPage>}></Route>
        <Route path="/systemer" element={<SystemsPage></SystemsPage>}></Route>
        <Route path="/om-oss" element={<AboutPage></AboutPage>}></Route>
      </Route>

      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
