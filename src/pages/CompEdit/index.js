import React from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import Header from "src/components/Header";
import EditCompanySection from "src/Section/EditCompanySection";

function CompEdit() {
  return (
    <div>
      <form>
        <Navbar />
        <Header />
        <EditCompanySection />
        <Footer />
      </form>
    </div>
  );
}

export default CompEdit;
