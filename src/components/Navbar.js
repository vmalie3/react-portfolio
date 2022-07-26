import React, { useState } from "react";
import '../style/Navbar.css'

function Navbar({ setPage }) {

    return (
        <div className="header sticky-top">
            <div className="navbar">
                <div>
                    <h1>Victoria Malie</h1>
                </div>
                <div className="nav">
                    <a href="#about" onClick={() => setPage('about')} className="nav-item">About Me</a>
                    <a href="#portfolio" onClick={() => setPage('portfolio')} className="nav-item">Portfolio</a>
                    <a href="#contact" onClick={() => setPage('contact')} className="nav-item">Contact Me</a>
                    <a href="#resume" onClick={() => setPage('resume')} className="nav-item">Resume</a>
                </div>
            </div>
        </div>
    )
};

export default Navbar;