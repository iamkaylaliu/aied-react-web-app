// Exhibit1.js
import React from 'react';
import "./exhibit.css";

function Exhibit304() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            {/* <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1"></div> */}
            <div className="exhibit-col-6">
                <iframe
                    width="90%"
                    height="90%"
                    src="https://www.youtube.com/embed/91XI7M9l3no"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            {/* <div className="exhibit-column exhibit-col-1"></div> */}
        </div>
    );
}

export default Exhibit304;
