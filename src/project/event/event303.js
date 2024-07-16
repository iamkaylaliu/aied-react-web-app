import React from 'react';
import "./event.css";
import wu1 from "../images/wu1.png";
import hedy7 from "../images/hedy7.png";
import feynman9 from "../images/feynman9.png";

function Event303() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="event-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={wu1} alt="Wu" className="text-image" />
                        <p className="text-message"><strong>Verse 3 (Wu):</strong><br />
                            Particles small, mysteries deep,<br />
                            My experiments unveiled secrets we keep.<br />
                            From atoms' cores to quantum surprise,<br />
                            Nature's puzzles, under scientific eyes.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={hedy7} alt="Hedy" className="text-image" />
                        <p className="text-message"><strong>Verse 4 (Lamarr):</strong><br />
                            Actress and inventor, roles combined,<br />
                            Frequency hopping, a technology refined.<br />
                            From Hollywood screens to signals clear,<br />
                            Communication's path, innovation dear.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={feynman9} alt="Feynman" className="text-image" />
                        <p className="text-message"><strong>Verse 5 (Feynman):</strong><br />
                            With diagrams dance, particles' play,<br />
                            Quantum realms where mysteries sway.<br />
                            From electrons' paths to quantum might,<br />
                            Nature's secrets revealed in light.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event303;
