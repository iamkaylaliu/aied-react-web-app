// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import wu2 from "../images/wu2.jpg";

function Exhibit402() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={wu2} className="exhibit-half-image" alt="Chien-Shiung Wu" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p>“Greetings, fellow explorers of the subatomic realm! I am Chien-Shiung Wu, the ‘First Lady of Physics.’</p>
                        <p>Imagine you’re in a particle accelerator lab, surrounded by humming machinery. The air crackles with anticipation as electrons spin and collide.</p>
                        <p>My hands adjust delicate instruments—their dance reveals the universe’s deepest secrets. Quantum mechanics may govern the subatomic realm, but it’s my experiments that unveil its mysteries.</p>
                        <p>Picture polarized electrons—like tiny compass needles—aligning in magnetic fields.</p>
                        <p>Embrace the asymmetry, my friends! Curiosity drives progress, whether in the lab or the cosmos.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit402;
