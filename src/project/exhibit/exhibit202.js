// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import ada3 from "../images/ada3.jpeg";

function Exhibit202() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={ada3} className="exhibit-half-image" alt="Ada Lovelace" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p>“Greetings, fellow explorers of the digital frontier! I am Ada Lovelace, the enchantress of algorithms and the world’s first computer programmer.</p>
                        <p>Close your eyes and imagine punch cards weaving patterns in the air. These cards, like musical notes, compose mathematical symphonies. They’re not just for weaving fabric; they weave the fabric of computation.</p>
                        <p>Our world pulses with artificial intelligence (AI) and machine learning. My insights inspire AI researchers and developers. The algorithms we create—those intricate dances of logic—power everything from natural language processing to image recognition.</p>
                        <p>Embrace the binary, my friends! Remember, there’s poetry in every line of code."</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit202;
