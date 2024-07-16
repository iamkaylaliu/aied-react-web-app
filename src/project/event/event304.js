import React from 'react';
import "./event.css";
import ada1 from "../images/ada1.png";
import all from "../images/all.jpeg";

function Event304() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="event-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={ada1} alt="Ada" className="text-image" />
                        <p className="text-message"><strong>Verse 6 (Lovelace):</strong><br />
                            With algorithms' art and vision clear,<br />
                            The first programmer, pioneering here.<br />
                            From punch cards to digital age,<br />
                            Computing's dawn, on history's stage.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={all} alt="All" className="text-image" />
                        <p className="text-message"><strong>Bridge:</strong><br />
                            Together we stand, in science’s embrace,<br />
                            Curiosity guiding each step we trace.<br />
                            From theory to practice, hands-on we thrive,<br />
                            In the quest for knowledge, we truly come alive.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={all} alt="All" className="text-image" />
                        <p className="text-message"><strong>Final Chorus:</strong><br />
                            Newton's gravity holds us tight,<br />
                            Einstein's theories shine so bright.<br />
                            Wu's particles dance unseen,<br />
                            Lamarr's waves connect the scene.<br />
                            Feynman's diagrams, paths unfold,<br />
                            Lovelace's code, stories told.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event304;
