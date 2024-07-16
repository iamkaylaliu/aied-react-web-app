import React from 'react';
import "./event.css";
import ada1 from "../images/ada1.png";
import wu1 from "../images/wu1.png";
import hedy7 from "../images/hedy7.png";
import feynman9 from "../images/feynman9.png";

function Event204() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="event-links-container">
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="event-text-content">
                        <img src={feynman9} alt="Feynman" className="text-image" />
                        <p className="text-message">What challenges did you face in your careers, and how did you overcome them?</p>
                    </div>
                    <div className="event-text-content">
                        <img src={ada1} alt="Ada" className="text-image" />
                        <p className="text-message">One of my biggest challenges was gaining access to education in a male-dominated society. I was fortunate to have private tutors and the opportunity to collaborate with Charles Babbage. My passion for mathematics and the support of key individuals helped me persevere.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={wu1} alt="Wu" className="text-image" />
                        <p className="text-message">My challenges were both cultural and institutional. As a Chinese woman in America, I faced racial and gender biases. I focused on my research and let my work speak for itself. I also had the support of my family and mentors who believed in my abilities.</p>
                    </div>
                    <div className="event-text-content">
                        <img src={hedy7} alt="Hedy" className="text-image" />
                        <p className="text-message">Balancing my acting career and my passion for invention was challenging. Many didn’t take my scientific work seriously because of my Hollywood image. I persisted because I believed in the importance of my work. Collaboration with like-minded individuals, like composer George Antheil, helped bring my ideas to life.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Event204;
