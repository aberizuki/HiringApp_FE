import React, { useEffect } from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import Header from "src/components/Header";
import PortofolioSection from "src/Section/PortofolioSection";
import { redirect, useNavigate } from "react-router-dom";

function ProfilePortofolio() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('@userLogin')) {
      redirect('/')
    }
  }, [navigate])
  return (
    <div>
      <Navbar />
      <Header />
      <PortofolioSection />
      <Footer />
    </div>
  );
}

export default ProfilePortofolio;
