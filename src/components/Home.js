import React, { useState } from "react";
import '../style/home.css';
import About from "../pages/About";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

function Home() {

    const [page, setPage] = useState('about');

    if (page === 'about') {
        return (
            <>
                <Navbar setPage={setPage} />
                <About/>
                <Footer />
            </>
        );
    };
    if (page === 'contact') {
        return (
            <>
                <Navbar setPage={setPage} />
                <Contact />
                <Footer />
            </>
        );
    };
    if (page === 'portfolio') {
        return (
            <>
                <Navbar setPage={setPage} />
                <Portfolio />
                <Footer />
            </>
        );
    };
    if (page === 'resume') {
        return (
            <>
                <Navbar setPage={setPage} />
                <h1>Resume</h1>
                <Footer />
            </>
        );
    };
};

export default Home;