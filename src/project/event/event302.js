// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt2 from "../images/nt2.jpeg";

function Event302() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Verse 4 (Lamarr):</strong></p>
                        <p>Actress and inventor, roles combined,</p>
                        <p>Frequency hopping, a technology refined.</p>
                        <p>From Hollywood screens to signals clear,</p>
                        <p>Communication's path, innovation dear.</p>

                        <p><strong>Verse 5 (Feynman):</strong></p>
                        <p>With diagrams dance, particles' play,</p>
                        <p>Quantum realms where mysteries sway.</p>
                        <p>From electrons' paths to quantum might,</p>
                        <p>Nature's secrets revealed in light.</p>

                        <p><strong>Verse 6 (Lovelace):</strong></p>
                        <p>With algorithms' art and vision clear,</p>
                        <p>The first programmer, pioneering here.</p>
                        <p>From punch cards to digital age,</p>
                        <p>Computing's dawn, on history's stage.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event302;
