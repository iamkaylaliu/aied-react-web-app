import React from 'react';
import "./event.css";
import all from "../images/all.jpeg";

function Event304() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="event-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={all} alt="All" className="text-image" />
                        <p className="text-message"><strong>Outro:</strong><br />
                            In the symphony of science, together we play,<br />
                            Exploring the world in our own unique way.<br />
                            From stars in the sky to technology's might,<br />
                            In the journey of discovery, our future is bright.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event304;
