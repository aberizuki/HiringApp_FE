import React, { useEffect } from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import Header from "src/components/Header";
import HireSection from "src/Section/HireSection";
import { redirect, useNavigate } from "react-router-dom";

function Hire() {
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
      <HireSection />
      <Footer />
    </div>
  );
}

export default Hire;
