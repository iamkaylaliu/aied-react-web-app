// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt1 from "../images/nt1.jpeg";

function Exhibit101() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt1} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className=" label">
                        <span className="label-text">Name:</span>
                        <span className="value">Isaac Newton</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Age in 2024:</span>
                        <span className="value">382 years</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Occupation:</span>
                        <span className="value">Scientist, Mathematician, Physicist, Astronomer</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Fun Fact:</span>
                        <span className="value">
                            <ol>
                                <li>Isaac Newton's dad is also called Isaac Newton.</li>
                                <li>Newton's birth year matches Galileo's death year: 1642.</li>
                                <li>His mom initially wanted him to be a farmer.</li>
                            </ol>
                        </span>
                    </div>
                    <div className="label">
                        <span className="label-text">Great-Great... Grandpa of:</span>
                        <span className="value">
                            GPS, Modern Physics, Calculus, Optics, Engineering, Space Exploration, Scientific Method, Industrial Revolution
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit101;
