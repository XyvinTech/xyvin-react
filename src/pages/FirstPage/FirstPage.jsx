import React from "react";
import Features from "./FirstPageSections/Features.jsx";
import IndexNavbar from "../../components/Navbar/Navbar.jsx";
import PageHeader from "./FirstPageSections/PageHeader.jsx";
import Carousal from "./FirstPageSections/Carousal.jsx";
import Download from "./FirstPageSections/Download.jsx";
import Testimonials from "./FirstPageSections/Testimonials.jsx";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";

export default function FirstPage() {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <div id="services">
            <Features />
            <Carousal />
          </div>

          <Testimonials />
          <Download />
        </div>
        <Footer />
      </div>
    </>
  );
}
