import React from 'react';
import "./exhibit.css";
import nt1 from "../images/nt1.jpeg";

function Event301() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt1} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Verse 1 (Newton):</strong></p>
                        <p>From falling apples to planets' sway,</p>
                        <p>My laws revealed how things move each day.</p>
                        <p>Gravity's pull, a force so strong,</p>
                        <p>Guiding stars and where we belong.</p>

                        <p><strong>Chorus:</strong></p>
                        <p>Newton's gravity holds us tight,</p>
                        <p>Einstein's theories shine so bright.</p>
                        <p>Wu's particles dance unseen,</p>
                        <p>Lamarr's waves connect the scene.</p>
                        <p>Feynman's diagrams, paths unfold,</p>
                        <p>Lovelace's code, stories told.</p>

                        <p><strong>Verse 2 (Einstein):</strong></p>
                        <p>In spacetime's fabric, where light can bend,</p>
                        <p>The universe's secrets, I sought to comprehend.</p>
                        <p>E=mc², a simple key,</p>
                        <p>Unlocking mysteries from sea to sea.</p>

                        <p><strong>Verse 3 (Wu):</strong></p>
                        <p>Particles small, mysteries deep,</p>
                        <p>My experiments unveiled secrets we keep.</p>
                        <p>From atoms' cores to quantum surprise,</p>
                        <p>Nature's puzzles, under scientific eyes.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event301;
