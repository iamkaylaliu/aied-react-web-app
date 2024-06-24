// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt2 from "../images/nt2.jpeg";

function Event102() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Feynman (Moderator):</strong></p>
                        <p>Thanks for those introductions. Sir Isaac, how do you respond to the cool things Einstein's theory explains?</p>
                        <p><strong>Newton:</strong></p>
                        <p>Einstein's theory is indeed cool and explains things my law couldn't. For example, why Mercury's orbit around the sun is a bit wonky. But my law of gravity is easier to use for many everyday things, like figuring out how fast a ball will fall or predicting the motion of planets.</p>
                        <p><strong>Einstein:</strong></p>
                        <p>Newton's law is definitely simpler, and it's great for many things. But to understand some really amazing stuff, like why light bends around stars or why time goes slower near a black hole, you need my theory. For example, during a solar eclipse, scientists saw that starlight bent as it passed near the sun, just like my theory predicted!</p>
                        <p><strong>Newton:</strong></p>
                        <p>Einstein’s right; his theory explains those strange phenomena well. However, my equations are simpler and very useful for most practical problems. Engineers and scientists use them every day because they’re straightforward and effective.</p>
                        <p><strong>Einstein:</strong></p>
                        <p>Practicality is important, and Newton’s equations work well for many things. But for the deepest questions about the universe—like what happens inside black holes or how the universe began—my theory is essential. It’s like having a super advanced tool for understanding the universe.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event102;
