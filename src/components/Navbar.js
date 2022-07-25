import React, { useState } from "react";

function Navbar({ setPage }) {

    return (
        <div>
            <div>
                <h1>Victoria Malie</h1>
            </div>
            <div>
                <a href="#about" onClick={() => setPage('about')}>About Me</a>
                <a href="#portfolio" onClick={() => setPage('portfolio')}>Portfolio</a>
                <a href="#contact" onClick={() => setPage('contact')}>Contact Me</a>
                <a href="#resume" onClick={() => setPage('resume')}>Resume</a>
            </div>
        </div>
    )
};

export default Navbar;