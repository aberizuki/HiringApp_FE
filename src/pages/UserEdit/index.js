import React, { useEffect } from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import Header from "src/components/Header";
import EditProfileSection from "src/Section/EditProfileSection";
import { redirect, useNavigate } from "react-router-dom";

function UserEdit() {
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
      <EditProfileSection />
      <Footer />
    </div>
  );
}

export default UserEdit;
