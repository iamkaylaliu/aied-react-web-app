// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import hd1 from "../images/hd1.png";

function Exhibit502() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={hd1} className="exhibit-half-image" alt="Hedy Lamarr" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p>“Ah, my fellow visionaries! I am Hedy Lamarr, the silver screen siren who danced through Hollywood’s golden age. But behind the glamour lies a mind that dances with frequencies and waves.</p>
                        <p>My invention—the frequency-hopping spread spectrum—once guided torpedoes, but now it underpins Wi-Fi, Bluetooth, and cellular networks.</p>
                        <p>Picture a world where communication leaps across invisible channels. Yes, my legacy extends beyond the silver screen.</p>
                        <p>In our interconnected age, streaming services blend seamlessly with entertainment. Attend my virtual film festival, where classic movies meet interactive storytelling.</p>
                        <p>And remember, beauty and brains can coexist—just like radio waves and creativity.”</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit502;
