import React from 'react';
import "./exhibit.css";
import et1 from "../images/et1.jpeg";

function Exhibit301() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={et1} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className=" label">
                        <span className="label-text">Name:</span>
                        <span className="value">Albert Einstein</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Age in 2024:</span>
                        <span className="value">145 years</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Roles:</span>
                        <span className="value">Physicist, Theoretical Physicist, Nobel Laureate</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Fun Facts:</span>
                        <span className="value">
                            <ol>
                                <li>Einstein was awarded the Nobel Prize in Physics in 1921.</li>
                                <li>He published over 300 scientific papers.</li>
                                <li>Einstein's brain was removed and preserved after his death for research.</li>
                            </ol>
                        </span>
                    </div>
                    <div className="label">
                        <span className="label-text">Great-Great... Influence on:</span>
                        <span className="value">
                            Theory of Relativity, Quantum Mechanics, Modern Physics, Cosmology, Atomic Energy, GPS Technology, Photonics, Information Theory
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit301;
