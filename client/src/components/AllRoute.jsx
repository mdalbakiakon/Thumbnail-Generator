import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Landing from "../pages/Landing";
import PageNotFound from "../pages/PageNotFound";
import Pricing from "../pages/Pricing";
import Generate from "../pages/Generate";

const AllRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoute;
