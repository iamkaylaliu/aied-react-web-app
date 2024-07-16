import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

import einstein1 from "./images/einstein1.jpeg";
import hedy2 from "./images/hedy2.jpg";
import hedy3 from "./images/hedy3.jpg";
import curie5 from "./images/curie5.jpeg";
import wu4 from "./images/wu4.png";
import newton2 from "./images/newton2.jpg";
import einsteinc from "./images/einsteinc.jpg";
import feynmanc from "./images/feynmanc.jpg";
import feynman7 from "./images/feynman7.jpg";
import ada4 from "./images/ada4.png";

import { FiChevronRight } from 'react-icons/fi';

function Home() {
    return (
        <div className="home-container">
            <div className="column col-3">
                <img src={hedy2} className="full-image shrink-image5 img-fluid" alt="hedy2" />
                <img src={einstein1} className="full-image shrink-image5 img-fluid" alt="einstein1" style={{ height: '47%' }} />
                <img src={wu4} className="full-image shrink-image5 img-fluid" alt="wu5" />
            </div>
            <div className="column col-6">
                <img src={newton2} className="full-image img-fluid" alt="newton2" />
                <div className="blue-overlay">
                    <h2 className="white-text">EXPLORE</h2>
                    <h2 className="white-text">THE HIDDEN</h2>
                    <h2 className="white-text">SIDE OF</h2>
                    <h2 className="white-text">SCIENCE</h2>
                    <Link to="/project/galleries" className="explore-link">
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            WITH YOUR GUIDE FEYNMAN<FiChevronRight style={{ fontWeight: 'bold', marginLeft: '5px' }} />
                        </span>
                    </Link>
                </div>
                <img src={feynman7} className="full-image shrink-image1 img-fluid" alt="feynman7" style={{ width: '49%', height: '27%', marginTop: '3px' }} />
                <img src={hedy3} className="full-image shrink-image1 img-fluid" alt="hedy3" style={{ width: '49%', height: '27%' }} />
            </div>
            <div className="column col-3">
                <img src={feynmanc} className="full-image shrink-image2 img-fluid" alt="feynmanc" style={{ width: '35%', height: '20%' }} />
                <img src={einsteinc} className="full-image shrink-image3 img-fluid" alt="einsteinc" style={{ width: '61%', height: '20%' }} />
                <img src={curie5} className="full-image shrink-image5 img-fluid" alt="curie5" style={{ width: '97%', height: '48%' }} />
                <img src={ada4} className="full-image shrink-image4 img-fluid" alt="ada4" style={{ width: '97%', height: '27%' }} />
            </div>
        </div>
    );
}

export default Home;
