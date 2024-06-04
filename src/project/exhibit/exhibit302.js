// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import et2 from "../images/et2.jpeg";

function Exhibit302() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={et2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p>“Ah, my fellow cosmic wanderers! I’m Albert Einstein, wild hair and all.</p>
                        <p>E=mc²—those five symbols encapsulate the universe’s deepest secrets. Energy and matter are cosmic dance partners.</p>
                        <p>Nuclear reactors? Yep, that’s me. MRI machines? My brainchild. And solar panels? Well, they’re practically singing ‘energy-matter equivalence’ under the sun.</p>
                        <p>Oh, and black holes? They’re like cosmic data vaults—information trapped forever. Plus, follow me on Instagram for daily thought experiments!</p>
                        <p>Remember, curiosity is your compass, and imagination fuels discovery.”</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Exhibit302;
