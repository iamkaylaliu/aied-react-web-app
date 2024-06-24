import React from 'react';
import "./exhibit.css";
import nt1 from "../images/nt1.jpeg";

function Event201() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt1} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Feynman (Moderator):</strong></p>
                        <p>Welcome, everyone, to our exciting panel discussion titled "Women of No Importance." Today, we have three amazing women who have made huge contributions to science and technology: Ada Lovelace, Chien-Shiung Wu, and Hedy Lamarr. Let’s start with a brief introduction from each of our guests.</p>
                        <p><strong>Ada Lovelace:</strong></p>
                        <p>Hi, everyone! I’m Ada Lovelace. You might know me as the first computer programmer. In the 1800s, I worked with Charles Babbage on an early mechanical computer. I wrote what’s considered the first computer program, even though computers as we know them didn’t exist yet.</p>
                        <p><strong>Chien-Shiung Wu:</strong></p>
                        <p>Hello! I’m Chien-Shiung Wu, a physicist. In the 1950s, I did an experiment that changed how we understand certain particles in physics. My work helped prove that the laws of physics aren’t always the same for matter and antimatter, which was a big deal!</p>
                        <p><strong>Hedy Lamarr:</strong></p>
                        <p>Hi! I’m Hedy Lamarr. While many know me as an actress from Hollywood’s Golden Age, I’m also an inventor. During World War II, I co-invented a frequency-hopping spread spectrum technology, which is a foundational technology for modern wireless communication, including Wi-Fi and Bluetooth.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event201;
