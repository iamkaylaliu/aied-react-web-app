import React from 'react';
import "./event.css";
import newton7 from "../images/newton7.png";
import einstein9 from "../images/einstein9.png";
import feynman9 from "../images/feynman9.png";

function Event103() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="event-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={feynman9} alt="Feynman" className="text-image" />
                        <p className="text-message">Thanks for those introductions. Sir Isaac, how do you respond to the cool things Einstein's theory explains?</p>
                    </div>
                    <div className="event-text-content">
                        <img src={newton7} alt="Newton" className="text-image" />
                        <p className="text-message">Einstein's theory is indeed cool and explains things my law couldn't. For example, why Mercury's orbit around the sun is a bit wonky. But my law of gravity is easier to use for many everyday things, like figuring out how fast a ball will fall or predicting the motion of planets.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={einstein9} alt="Einstein" className="text-image" />
                        <p className="text-message">Newton's law is definitely simpler, and it's great for many things. But to understand some really amazing stuff, like why light bends around stars or why time goes slower near a black hole, you need my theory. For example, during a solar eclipse, scientists saw that starlight bent as it passed near the sun, just like my theory predicted!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event103;
