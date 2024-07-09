import React from 'react';
import "./exhibit.css";
import ada1 from "../images/ada1.png";
import wu1 from "../images/wu1.png";
import hedy7 from "../images/hedy7.png";
import feynman9 from "../images/feynman9.png";

function Event203() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={feynman9} alt="Feynman" className="text-image" />
                        <p className="text-message">What advice would you give to young women aspiring to enter the fields of science and technology?</p>
                    </div>
                    <div className="event-text-content">
                        <img src={ada1} alt="Ada" className="text-image" />
                        <p className="text-message">Follow your curiosity and passion. Don’t be afraid to explore and ask questions. Seek out mentors and allies who support your interests. Remember that your contributions are valuable and can change the world.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={wu1} alt="Wu" className="text-image" />
                        <p className="text-message">Work hard and stay dedicated to your goals. Don’t let biases or setbacks deter you. Science requires perseverance, and your unique perspective as a woman is an asset to the field.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={hedy7} alt="Hedy" className="text-image" />
                        <p className="text-message">Be fearless and innovative. Don’t let stereotypes limit you. Your ideas and creativity can lead to amazing breakthroughs. Find a balance between your interests and don’t be afraid to break the mold.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={feynman9} alt="Feynman" className="text-image" />
                        <p className="text-message">Thank you, Ada Lovelace, Chien-Shiung Wu, and Hedy Lamarr, for sharing your insights and experiences. Your contributions have paved the way for future generations of women in science and technology.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event203;
