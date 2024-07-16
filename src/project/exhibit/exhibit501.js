import React from 'react';
import "./exhibit.css";
import hd2 from "../images/hd2.jpeg";

function Exhibit501() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={hd2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="label">
                        <span className="label-text">Name:</span>
                        <span className="value">Hedy Lamarr</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Age in 2024:</span>
                        <span className="value">110 years</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Roles:</span>
                        <span className="value">Actress, Inventor, Engineer</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Key Highlights:</span>
                        <span className="value">
                            <ol>
                                <li>Hedy Lamarr co-invented frequency-hopping spread spectrum technology.</li>
                                <li>She was a famous Hollywood actress in the 1930s and 1940s.</li>
                                <li>Her invention laid the groundwork for modern Wi-Fi and Bluetooth technology.</li>
                            </ol>
                        </span>
                    </div>
                    <div className="label">
                        <span className="label-text">Great-Great... Influence on:</span>
                        <span className="value">
                            Wireless Communication, Wi-Fi, Bluetooth, Secure Communications, Technology Innovation
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit501;
