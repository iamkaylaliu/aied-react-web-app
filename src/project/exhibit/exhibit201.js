import React from 'react';
import "./exhibit.css";
import ada2 from "../images/ada2.jpeg";

function Exhibit201() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={ada2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className=" label">
                        <span className="label-text">Name:</span>
                        <span className="value">Ada Lovelace</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Age in 2024:</span>
                        <span className="value">208 years</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Roles:</span>
                        <span className="value">Mathematician, Writer, Computer Programming Pioneer</span>
                    </div>
                    <div className="label">
                        <span className="label-text">Fun Facts:</span>
                        <span className="value">
                            <ol>
                                <li>Ada Lovelace was the daughter of the poet Lord Byron.</li>
                                <li>She is considered the first computer programmer.</li>
                                <li>Ada wrote the first algorithm intended for a machine.</li>
                            </ol>
                        </span>
                    </div>
                    <div className="label">
                        <span className="label-text">Great-Great... Influence on:</span>
                        <span className="value">
                            Computer Science, Programming, Computational Theory, Artificial Intelligence
                        </span>
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Exhibit201;
