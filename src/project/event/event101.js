import React from 'react';
import "./exhibit.css";
import nt1 from "../images/nt1.jpeg";

function Event101() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt1} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Feynman (Moderator):</strong></p>
                        <p>Welcome, everyone, to the exciting debate between two of the greatest scientists in history. On one side, we have Sir Isaac Newton, who will tell us about his law of gravity. On the other, we have Albert Einstein, who will explain his theory of general relativity. Let's start with their opening statements.</p>
                        <p><strong>Newton:</strong></p>
                        <p>Hello, everyone! My law of gravity is quite simple: every object in the universe pulls on every other object. The strength of this pull depends on how big the objects are and how far apart they are. This idea helped us understand why apples fall to the ground and why planets orbit the sun.</p>
                        <p><strong>Einstein:</strong></p>
                        <p>Hi, everyone! While Newton's idea is great, I found something even more interesting. My theory of general relativity says that gravity isn't just a force but something even cooler: it’s the bending of space and time around massive objects like planets and stars. Imagine space as a stretchy sheet—when you put a heavy ball on it, the sheet bends, and smaller balls roll towards the heavy ball. That’s how gravity works!</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event101;
