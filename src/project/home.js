import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

import einstein1 from "./images/einstein1.jpeg";
import hedy2 from "./images/hedy2.jpg";
import hedy3 from "./images/hedy3.jpg";
import curie5 from "./images/curie5.jpeg";
import newton2 from "./images/newton2.jpg";
import einsteinc from "./images/einsteinc.jpg";
import feynmanc from "./images/feynmanc.jpg";
import feynman7 from "./images/feynman7.jpg";
import feynman8 from "./images/feynman8.jpg";
import plank from "./images/plank.jpeg";

import { FiChevronRight } from 'react-icons/fi';

function Home() {
    return (
        <div class="home-container">
            <div class="column col-3">
                <img src={hedy2} class="full-image" />
                <img src={einstein1} class="full-image" style={{ height: '45%' }} />
                <img src={plank} class="full-image" />
            </div>
            <div class="column col-6">
                <img src={newton2} class="full-image" />
                <div className="blue-overlay">
                    <h2 className="white-text">EXPLORE THE HIDDEN SIDE OF PHYSICS</h2>
                    <h2 className="white-text"><em>with your guide Feynman</em></h2>
                    <h3></h3>
                    <Link to="/project/galleries" className="explore-link">
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                            START FROM HERE <FiChevronRight style={{ fontWeight: 'bold', marginLeft: '5px' }} />
                        </span>
                    </Link>
                </div>
                <img src={feynman7} class="full-image" style={{ width: '50%', height: '27%', marginTop: '3px' }} />
                <img src={hedy3} class="full-image" style={{ width: '47%', height: '27%' }} />
            </div>
            <div class="column col-3">
                <img src={feynmanc} class="full-image" style={{ width: '35%' }} />
                <img src={einsteinc} class="full-image" style={{ width: '59%' }} />
                <img src={curie5} class="full-image" style={{ width: '97%', height: '48%' }} />
                <img src={feynman8} class="full-image" style={{ width: '97%', height: '27%' }} />
            </div>
        </div>
    );
}

export default Home;
