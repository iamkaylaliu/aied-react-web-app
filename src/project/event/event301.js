import React from 'react';
import "./exhibit.css";
import newton7 from "../images/newton7.png";
import einstein9 from "../images/einstein9.png";
import wu1 from "../images/wu1.png";
import all from "../images/all.jpeg";

function Event301() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={newton7} alt="Newton" className="text-image" />
                        <p className="text-message"><strong>Verse 1 (Newton):</strong><br />
                            From falling apples to planets' sway,<br />
                            My laws revealed how things move each day.<br />
                            Gravity's pull, a force so strong,<br />
                            Guiding stars and where we belong.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={all} alt="All" className="text-image" />
                        <p className="text-message"><strong>Chorus:</strong><br />
                            Newton's gravity holds us tight,<br />
                            Einstein's theories shine so bright.<br />
                            Wu's particles dance unseen,<br />
                            Lamarr's waves connect the scene.<br />
                            Feynman's diagrams, paths unfold,<br />
                            Lovelace's code, stories told.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={einstein9} alt="Einstein" className="text-image" />
                        <p className="text-message"><strong>Verse 2 (Einstein):</strong><br />
                            In spacetime's fabric, where light can bend,<br />
                            The universe's secrets, I sought to comprehend.<br />
                            E=mc², a simple key,<br />
                            Unlocking mysteries from sea to sea.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={wu1} alt="Wu" className="text-image" />
                        <p className="text-message"><strong>Verse 3 (Wu):</strong><br />
                            Particles small, mysteries deep,<br />
                            My experiments unveiled secrets we keep.<br />
                            From atoms' cores to quantum surprise,<br />
                            Nature's puzzles, under scientific eyes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event301;
