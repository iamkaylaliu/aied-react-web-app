import React from 'react';
import "./exhibit.css";
import nt1 from "../images/nt1.jpeg";

function Event101() {
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
                        <span className="label-text">Roles:</span>
                        <span className="value">Scientist, Mathematician, Physicist, Astronomer</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Fun Facts:</span>
                        <span className="value">
                            <ol>
                                <li>Formulated the laws of motion and universal gravitation.</li>
                                <li>Developed calculus independently of Leibniz.</li>
                                <li>Made significant contributions to optics, including the study of white light and color.</li>
                            </ol>
                        </span>
                    </div>
                    <div className="label">
                        <span className="label-text">Great-Great... Influence on:</span>
                        <span className="value">
                            Modern Physics, Calculus, Classical Mechanics, Optics, Space Exploration, Scientific Method, Industrial Revolution
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event101;
