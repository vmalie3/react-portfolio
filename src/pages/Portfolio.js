import React from "react";

function Portfolio() {
    return (
        <>
            <h1>Portfolio</h1>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card" style={style.card}>
                        <img className="card-img-top" src="../../images/bandTracker.png" />
                        <a href="https://cokamuro.github.io/band-tracker/" className="btn btn-primary" style={style.link}>Live Site</a>
                        <a href="https://github.com/cokamuro/band-tracker" className="btn btn-primary" style={style.link}>Repository</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" style={style.card}>
                        <img className="card-img-top" src="../../images/bandTracker.png" />
                        <a href="https://cokamuro.github.io/band-tracker/" className="btn btn-primary" style={style.link}>Live Site</a>
                        <a href="https://github.com/cokamuro/band-tracker" className="btn btn-primary" style={style.link}>Repository</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" style={style.card}>
                        <img className="card-img-top" src="../../images/bandTracker.png" />
                        <a href="https://cokamuro.github.io/band-tracker/" className="btn btn-primary" style={style.link}>Live Site</a>
                        <a href="https://github.com/cokamuro/band-tracker" className="btn btn-primary" style={style.link}>Repository</a>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-sm-4">
                    <div className="card" style={style.card}>
                        <img className="card-img-top" src="../../images/bandTracker.png" />
                        <a href="https://cokamuro.github.io/band-tracker/" className="btn btn-primary" style={style.link}>Live Site</a>
                        <a href="https://github.com/cokamuro/band-tracker" className="btn btn-primary" style={style.link}>Repository</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" style={style.card}>
                        <img className="card-img-top" src="../../images/bandTracker.png" />
                        <a href="https://cokamuro.github.io/band-tracker/" className="btn btn-primary" style={style.link}>Live Site</a>
                        <a href="https://github.com/cokamuro/band-tracker" className="btn btn-primary" style={style.link}>Repository</a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" style={style.card}>
                        <img className="card-img-top" src="../../images/bandTracker.png" />
                        <a href="https://cokamuro.github.io/band-tracker/" className="btn btn-primary" style={style.link}>Live Site</a>
                        <a href="https://github.com/cokamuro/band-tracker" className="btn btn-primary" style={style.link}>Repository</a>
                    </div>
                </div>
            </div>
        </>
    );
};

const style = {
    card: {
        width: '20rem',
        border: 'solid green',
    },
    link: {
        border: 'solid',
    }
}

export default Portfolio;
