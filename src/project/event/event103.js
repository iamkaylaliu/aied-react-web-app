import React from 'react';
import "./exhibit.css";
import newton7 from "../images/newton7.png";
import einstein9 from "../images/einstein9.png";
import feynman9 from "../images/feynman9.png";

function Event103() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={newton7} alt="Newton" className="text-image" />
                        <p className="text-message">Einstein’s right; his theory explains those strange phenomena well. However, my equations are simpler and very useful for most practical problems. Engineers and scientists use them every day because they’re straightforward and effective.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={einstein9} alt="Einstein" className="text-image" />
                        <p className="text-message">Practicality is important, and Newton’s equations work well for many things. But for the deepest questions about the universe—like what happens inside black holes or how the universe began—my theory is essential. It’s like having a super advanced tool for understanding the universe.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event103;
