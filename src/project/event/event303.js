import React from 'react';
import "./exhibit.css";
import all from "../images/all.jpeg";

function Event303() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
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

export default Event303;
