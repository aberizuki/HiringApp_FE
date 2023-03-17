import React, { useEffect } from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import Header from "src/components/Header";
import HomeSection from "src/Section/HomeSection";
import { redirect, useNavigate } from "react-router-dom";

function Home() {
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
            <HomeSection />
            <Footer />
        </div>
    )
}

export default Home
