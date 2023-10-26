import React from "react";
import ReactDOM from "react-dom/client";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import ScrollToTop from "components/ScrollToTop";

import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import FirstPage from "./pages/FirstPage/FirstPage.jsx";
import ContactPage from "pages/ContactPage/ContactPage.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <BrowserRouter>
    <ScrollToTop />

      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>{" "}
  </React.StrictMode>
);
