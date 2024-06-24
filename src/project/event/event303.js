// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt2 from "../images/nt2.jpeg";

function Event303() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Bridge:</strong></p>
                        <p>Together we stand, in science’s embrace,</p>
                        <p>Curiosity guiding each step we trace.</p>
                        <p>From theory to practice, hands-on we thrive,</p>
                        <p>In the quest for knowledge, we truly come alive.</p>

                        <p><strong>Final Chorus:</strong></p>
                        <p>Newton's gravity holds us tight,</p>
                        <p>Einstein's theories shine so bright.</p>
                        <p>Wu's particles dance unseen,</p>
                        <p>Lamarr's waves connect the scene.</p>
                        <p>Feynman's diagrams, paths unfold,</p>
                        <p>Lovelace's code, stories told.</p>

                        <p><strong>Outro:</strong></p>
                        <p>In the symphony of science, together we play,</p>
                        <p>Exploring the world in our own unique way.</p>
                        <p>From stars in the sky to technology's might,</p>
                        <p>In the journey of discovery, our future is bright.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event303;
