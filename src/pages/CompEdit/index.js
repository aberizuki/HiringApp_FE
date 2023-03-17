import React, { useEffect } from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import Header from "src/components/Header";
import EditCompanySection from "src/Section/EditCompanySection";
import { redirect, useNavigate } from "react-router-dom";

function CompEdit() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('@userLogin')) {
      redirect('/')
    }
  }, [navigate])
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
