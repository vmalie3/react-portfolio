import React from "react";
import "../style/Portfolio.css";

function Portfolio() {
    return (
        <>
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col-sm-4 border">
                    <div className="card">
                        <img className="card-img-top" src="../../images/bandTracker.png" alt="band tracker screenshot"/>
                        <a href="https://cokamuro.github.io/band-tracker/" className="btn btn-primary link" >Live Site</a>
                        <a href="https://github.com/cokamuro/band-tracker" className="btn btn-primary link" >Repository</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" >
                        <img className="card-img-top" src="../../images/trip-planner-scrnn.png" alt="trip planner screenshot"/>
                        <a href="https://sleepy-gorge-87966.herokuapp.com/" className="btn btn-primary link" >Live Site</a>
                        <a href="https://github.com/HarrisonHayes/trip-planner" className="btn btn-primary link" >Repository</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" >
                        <img className="card-img-top" src="../../images/password-generator.png" alt="password generator screenshot"/>
                        <a href="https://vmalie3.github.io/weather-dashboard/" className="btn btn-primary link" >Live Site</a>
                        <a href="https://github.com/vmalie3/password-generator" className="btn btn-primary link" >Repository</a>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card" >
                        <img className="card-img-top" src="../../images/weather-dashboard.png" alt="weather dashboard screenshot"/>
                        <a href="https://vmalie3.github.io/weather-dashboard/" className="btn btn-primary link" >Live Site</a>
                        <a href="https://github.com/vmalie3/weather-dashboard" className="btn btn-primary link" >Repository</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src="../../images/JATE.png" alt="text editor screenshot"/>
                        <a href="https://radiant-hollows-41625.herokuapp.com/" className="btn btn-primary link" >Live Site</a>
                        <a href="https://github.com/vmalie3/text-editor" className="btn btn-primary link" >Repository</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <img className="card-img-top" src="../../images/code-quiz.png" alt="code quiz screenshot"/>
                        <a href="https://vmalie3.github.io/code-quiz" className="btn btn-primary link" >Live Site</a>
                        <a href="https://github.com/vmalie3/code-quiz" className="btn btn-primary link" >Repository</a>
                    </div>
                </div>
            </div>
        </>
    );
};

// const style = {
//     border: {
//         border: 'solid green',
//     },
//     card: {
//         width: '100%',
//     },
//     link: {
//         border: 'solid',
//     }
// }

export default Portfolio;
