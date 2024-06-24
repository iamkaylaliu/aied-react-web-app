// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt2 from "../images/nt2.jpeg";

function Event103() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Feynman (Moderator):</strong></p>
                        <p>Both of you make great points. What do you think about the future of physics?</p>
                        <p><strong>Newton:</strong></p>
                        <p>The future of physics will build on what we’ve learned. New discoveries will improve our understanding of the universe. It’s an exciting journey of learning more and more about how everything works.</p>
                        <p><strong>Einstein:</strong></p>
                        <p>I agree. Physics must keep evolving. One of the biggest challenges now is to combine my theory with another big idea called quantum mechanics. If we can do that, we might understand everything from the tiniest particles to the entire universe.</p>
                        <p><strong>Feynman (Moderator):</strong></p>
                        <p>Thank you, Sir Isaac Newton and Albert Einstein, for this fascinating debate. Your ideas have changed the world, and they continue to inspire young minds everywhere.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event103;
