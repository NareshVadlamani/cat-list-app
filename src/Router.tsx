import { Switch } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CatDetails } from "./Components/CatDetails/CatDetails";
import { CateList } from "./Components/List/CateList";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<CateList />} />
      <Route path="/cat/:catId" element={<CatDetails />} />
    </Routes>
  </BrowserRouter>
);
