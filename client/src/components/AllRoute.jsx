import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Landing from "../pages/Landing";
import PageNotFound from "../pages/PageNotFound";

const AllRoute = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AllRoute;
