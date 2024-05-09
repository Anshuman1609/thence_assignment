import React from 'react';
import Navbar from "../../components/navbar/Navbar.js";
import Header from "../../components/header/Header.js";
import Quest from "../../components/quest/Quest.js";
import Footer from "../../components/footer/Footer.js";

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <div>
                <Quest />
            </div>
            <Footer />
        </>
    )
}

export default Home