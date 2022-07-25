import React, { useState } from "react";
import About from "../pages/About";
import Footer from "./Footer";
import Navbar from "./Navbar";

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
                <h1>Contact</h1>
                <Footer />
            </>
        );
    };
    if (page === 'portfolio') {
        return (
            <>
                <Navbar setPage={setPage} />
                <h1>Portfolio</h1>
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