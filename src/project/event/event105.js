import React from 'react';
import "./event.css";
import newton7 from "../images/newton7.png";
import einstein9 from "../images/einstein9.png";
import feynman9 from "../images/feynman9.png";

function Event105() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="event-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={feynman9} alt="Feynman" className="text-image" />
                        <p className="text-message">Both of you make great points. What do you think about the future of physics?</p>
                    </div>
                    <div className="event-text-content">
                        <img src={newton7} alt="Newton" className="text-image" />
                        <p className="text-message">The future of physics will build on what we’ve learned. New discoveries will improve our understanding of the universe. It’s an exciting journey of learning more and more about how everything works.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={einstein9} alt="Einstein" className="text-image" />
                        <p className="text-message">I agree. Physics must keep evolving. One of the biggest challenges now is to combine my theory with another big idea called quantum mechanics. If we can do that, we might understand everything from the tiniest particles to the entire universe.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={feynman9} alt="Feynman" className="text-image" />
                        <p className="text-message">Thank you, Sir Isaac Newton and Albert Einstein, for this fascinating debate. Your ideas have changed the world, and they continue to inspire young minds everywhere.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event105;
