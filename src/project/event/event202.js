import React from 'react';
import "./event.css";
import ada1 from "../images/ada1.png";
import wu1 from "../images/wu1.png";
import hedy7 from "../images/hedy7.png";
import feynman9 from "../images/feynman9.png";

function Event202() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="event-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={feynman9} alt="Feynman" className="text-image" />
                        <p className="text-message">Welcome, everyone, to our exciting panel discussion titled "Women of No Importance?" Today, we have three amazing women who have made huge contributions to science and technology: Ada Lovelace, Chien-Shiung Wu, and Hedy Lamarr. Let’s start with a brief introduction from each of our guests.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={ada1} alt="Ada" className="text-image" />
                        <p className="text-message">Hi, everyone! I’m Ada Lovelace. You might know me as the first computer programmer. In the 1800s, I worked with Charles Babbage on an early mechanical computer. I wrote what’s considered the first computer program, even though computers as we know them didn’t exist yet.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={wu1} alt="Wu" className="text-image" />
                        <p className="text-message">Hello! I’m Chien-Shiung Wu, a physicist. In the 1950s, I did an experiment that changed how we understand certain particles in physics. My work helped prove that the laws of physics aren’t always the same for matter and antimatter, which was a big deal!</p>
                    </div>
                    <div className="event-text-content">
                        <img src={hedy7} alt="Hedy" className="text-image" />
                        <p className="text-message">Hi! I’m Hedy Lamarr. While many know me as an actress from Hollywood’s Golden Age, I’m also an inventor. During World War II, I co-invented a frequency-hopping spread spectrum technology, which is a foundational technology for modern wireless communication, including Wi-Fi and Bluetooth.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event202;
