import React, { useEffect } from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import ProfileCompanySection from "src/Section/ProfileCompanySection";
import { redirect, useNavigate } from "react-router-dom";

function ProfileComapany() {
    const navigate = useNavigate()
    useEffect(() => {
        if (!localStorage.getItem('@userLogin')) {
            redirect('/')
        }
    }, [navigate])
    return (
        <div>
            <Navbar />
            <ProfileCompanySection />
            <Footer />
        </div>
    )
}


export default ProfileComapany