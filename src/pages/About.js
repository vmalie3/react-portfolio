import React from "react";
import "../style/home.css"

function About() {
    return (
        <div className="aboutDiv">
            <h1>About Me</h1>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <img src="../../images/gradpicfaceresize.jpg" alt="Pic of Victoria at NCSU Graduation"></img>
                    <h4>I am an NC State University graduate with a bachelor's of science in business administration. I'm currently learning how to be a full-stack web developer through UNCC's coding bootcamp. I'm from Charlotte NC.</h4>
                </div>
                <div className="col-4"></div>

            </div>
            {/* <div className="card" id="aboutCard">
                <img className="card-img-top" src="../../images/gradpicfaceresize.jpg" alt="Pic of Victoria at NCSU Graduation"></img>
                <p className="card-text">insert about me info</p>
            </div> */}
        </div>
    );
};

export default About;