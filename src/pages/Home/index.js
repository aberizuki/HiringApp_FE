import React from "react";
import Navbar from "src/Section/Navbar";
import Footer from "src/Section/Footer";
import Header from "src/components/Header";
import HomeSection from "src/Section/HomeSection";

function Home() {
    return(
        <div>
            <Navbar/>
            <Header/>
            <HomeSection/>
            <Footer/>
        </div>
    )
}

export default Home
