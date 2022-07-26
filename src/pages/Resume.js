import React from "react";
import '../style/Resume.css';

function Resume() {
    return (
        <>
            <h1 className="resumeTitle">Resume</h1>
            <ul className="list">
                Front-End Proficiencies
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <ul className="list">
                Back-End Proficiencies
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            <h5 className="resumeLink">Downloadable Resume:</h5>
                <a className= "resLink" href="https://drive.google.com/file/d/1KFmGwwYxUW8-36qRZMrzZ6TZdqFerbWL/view?usp=sharing" download={true}>Victoria's Resume</a>
            <br></br><br></br><br></br><br></br><br></br>
        </>
    )
}

export default Resume;