import React from 'react';
import "./exhibit.css";
import wu3 from "../images/wu3.png";

function Exhibit401() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={wu3} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="label">
                        <span className="label-text">Name:</span>
                        <span className="value">Chien-Shiung Wu</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Age in 2024:</span>
                        <span className="value">112 years</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Roles:</span>
                        <span className="value">Experimental Physicist, Professor, Pioneer in Nuclear Physics</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Key Highlights:</span>
                        <span className="value">
                            <ol>
                                <li>Chien-Shiung Wu worked on the Manhattan Project during World War II.</li>
                                <li>She is best known for the Wu experiment, which disproved the conservation of parity.</li>
                                <li>Wu was the first woman to serve as president of the American Physical Society.</li>
                            </ol>
                        </span>
                    </div>
                    <div className="label">
                        <span className="label-text">Great-Great... Influence on:</span>
                        <span className="value">
                            Nuclear Physics, Experimental Physics, Quantum Mechanics, Particle Physics
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit401;
