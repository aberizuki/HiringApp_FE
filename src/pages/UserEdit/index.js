import React from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import Header from "src/components/Header";
import EditProfileSection from "src/Section/EditProfileSection";

function UserEdit() {
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
