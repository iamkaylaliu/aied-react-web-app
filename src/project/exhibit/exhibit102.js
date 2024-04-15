// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt2 from "../images/nt2.jpeg";

function Exhibit102() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p>“Ah, splendid to see you all! Sir Isaac Newton reporting in. </p>
                        <p>You know me as the guy who pondered falling apples and celestial ballets. But let’s talk practical physics.</p>
                        <p>My laws of motion—those three gems—still rule the playground. When you kick a soccer ball, you’re channeling my wisdom.</p>
                        <p>And gravity? It’s not just about planets—it’s in your skateboard tricks, your roller coasters, and even your morning cereal (thanks, milk!).</p>
                        <p>Oh, and GPS navigation? Yep, that’s my gravitational pull guiding you to the nearest Pokémon Gym.</p>
                        <p>Keep those equations handy! Remember, every action has an equal and opposite reaction.”</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit102;
