import React from 'react';
import "./exhibit.css";
import newtoncartoon from "../images/newtoncartoon.jpeg";

function Exhibit1() {
    return (
        <div>
            <div className="exhibit-linkbar">
                <h1>01 | ISAAC NEWTON</h1>
            </div>
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-4 exhibit-col-light-blue">
                    <div className="exhibit-links-container">
                        <div className="exhibit-column exhibit-col-2">
                            <img src={newtoncartoon} className="exhibit-half-image" />
                            <div className="label">
                                <span className="label-text">Name:</span>
                                <span className="value">Isaac Newton</span>
                            </div>
                            <div className="label">
                                <span className="label-text">Age in 2024:</span>
                                <span className="value">382 years</span>
                            </div>
                            <div className="label">
                                <span className="label-text">Occupation:</span>
                                <span className="value">Scientist, Mathematician, Physicist, Astronomer</span>
                            </div>
                            <div className="label">
                                <span className="label-text">Fun Fact:</span>
                                <span className="value">Isaac Newton's dad is also called Isaac Newton.</span>
                            </div>
                            <div className="label">
                                <span className="label-text">Great-Great... Grandpa of:</span>
                                <span className="value">
                                    GPS, Modern Physics, Calculus, Optics, Engineering, Space Exploration, Scientific Method, Industrial Revolution
                                </span>
                            </div>
                        </div>
                        <div className="exhibit-column exhibit-col-2">
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
                </div>
            </div>
        </div>
    );
}

export default Exhibit1;
