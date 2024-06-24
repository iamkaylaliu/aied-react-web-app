// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt2 from "../images/nt2.jpeg";

function Event203() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Feynman (Moderator):</strong></p>
                        <p>What challenges did you face in your careers, and how did you overcome them?</p>
                        <p><strong>Ada Lovelace:</strong></p>
                        <p>One of my biggest challenges was gaining access to education in a male-dominated society. I was fortunate to have private tutors and the opportunity to collaborate with Charles Babbage. My passion for mathematics and the support of key individuals helped me persevere.</p>
                        <p><strong>Chien-Shiung Wu:</strong></p>
                        <p>My challenges were both cultural and institutional. As a Chinese woman in America, I faced racial and gender biases. I focused on my research and let my work speak for itself. I also had the support of my family and mentors who believed in my abilities.</p>
                        <p><strong>Hedy Lamarr:</strong></p>
                        <p>Balancing my acting career and my passion for invention was challenging. Many didn’t take my scientific work seriously because of my Hollywood image. I persisted because I believed in the importance of my work. Collaboration with like-minded individuals, like composer George Antheil, helped bring my ideas to life.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event203;
