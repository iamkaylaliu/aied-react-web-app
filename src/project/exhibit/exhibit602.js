// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import fm3 from "../images/fm3.png";

function Exhibit602() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={fm3} className="exhibit-half-image" alt="Richard Feynman" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p>“Greetings, fellow explorers! I’m Richard Feynman, the physicist who danced with bongos and unraveled quantum mysteries.</p>
                        <p>Picture this: You’re in a cozy café, sipping espresso. Suddenly, a tiny particle—the quark—whizzes past. Quantum mechanics is our backstage pass to this magical show.</p>
                        <p>It governs everything from the behavior of electrons in atoms to the colors of rainbows.</p>
                        <p>And guess what? Those quirky qubits—the building blocks of quantum computers—are my legacy. They’ll revolutionize encryption, drug discovery, and climate modeling.</p>
                        <p>So, embrace the weirdness, my friends! And remember, there’s plenty of room at the bottom!”</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit602;
