// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt2 from "../images/nt2.jpeg";

function Exhibit103() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt2} className="event-half-image" />
                    <div className="event-text-column text-content">
                        <p>“Me: I'm a high school student and I want you to simulate a conversation between Newton's laws of gravity and General Relativity. After every exchange see if I have anything to add.</p></div>
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p>ChatGPT:</p>
                        <p>Newton's Law of Gravity (NLG): "Hello there, General Relativity! As you know, I state that every particle attracts every other particle in the universe with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers."</p>
                        <p>General Relativity (GR): "Hello, Newton! Indeed, I'm aware of your laws, which have been incredibly successful in predicting the behavior of objects under gravity. However, I describe gravity not as a force, but as a curvature of space-time caused by mass and energy."</p>

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit103;
