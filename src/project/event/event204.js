// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt2 from "../images/nt2.jpeg";

function Event204() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Feynman (Moderator):</strong></p>
                        <p>What advice would you give to young women aspiring to enter the fields of science and technology?</p>
                        <p><strong>Ada Lovelace:</strong></p>
                        <p>Follow your curiosity and passion. Don’t be afraid to explore and ask questions. Seek out mentors and allies who support your interests. Remember that your contributions are valuable and can change the world.</p>
                        <p><strong>Chien-Shiung Wu:</strong></p>
                        <p>Work hard and stay dedicated to your goals. Don’t let biases or setbacks deter you. Science requires perseverance, and your unique perspective as a woman is an asset to the field.</p>
                        <p><strong>Hedy Lamarr:</strong></p>
                        <p>Be fearless and innovative. Don’t let stereotypes limit you. Your ideas and creativity can lead to amazing breakthroughs. Find a balance between your interests and don’t be afraid to break the mold.</p>
                        <p><strong>Feynman (Moderator):</strong></p>
                        <p>Thank you, Ada Lovelace, Chien-Shiung Wu, and Hedy Lamarr, for sharing your insights and experiences. Your contributions have paved the way for future generations of women in science and technology.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event204;
