import * as React from "react";
// import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
// import AppShell from "../AppLayout/AppShell";
import Home from "../pages/Home";
import Procedures from "../pages/Procedures";
import CountrySelect from "../Search/test";
import SearchPage from "../Search/SearchPage";
import ProcedurePrice from "../pages/ProcedurePrice";
import Providers from "../pages/Providers";
import Payers from "../pages/Payers";
import PageNotFound from "../pages/PageNotFound";
import ComingSoon from "../pages/ComingSoon";
//21-11-23
import ProviderInfo from "../pages/ProviderInfo";

// const MainPage = React.lazy(() => import("../pages/HCD-Main"));

export const Router = () => {
  return (
    // <React.Suspense fallback={null}>
    //   <Routes>
    //     <Route element={<AppShell />}>
    //       <Route path="/" element={<MainPage />} />
    //     </Route>
    //   </Routes>
    // </React.Suspense>
    // <ProviderInfo />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/test" element={<CountrySelect />} />
      <Route path="/procedures" element={<Procedures />} />
      <Route path="/providers" element={<Providers />} />
      <Route path="/payers" element={<Payers />} />
      <Route path="/ProcedureRate" element={<ProcedurePrice />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
      <Route path="/Providerinfo" element={<ProviderInfo />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
