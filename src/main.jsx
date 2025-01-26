import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs";
import MainLayout from "./Layout/MainLayout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
        </Route>
        {/* <Route path="" element={<Home />}>
          <Route path="about" element={<AboutUs />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
