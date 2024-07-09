import React from 'react';
import "./exhibit.css";
import ada1 from "../images/ada1.png";
import hedy7 from "../images/hedy7.png";
import feynman9 from "../images/feynman9.png";

function Event302() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
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
                    <div className="event-text-content">
                        <img src={ada1} alt="Ada" className="text-image" />
                        <p className="text-message"><strong>Verse 6 (Lovelace):</strong><br />
                            With algorithms' art and vision clear,<br />
                            The first programmer, pioneering here.<br />
                            From punch cards to digital age,<br />
                            Computing's dawn, on history's stage.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event302;
