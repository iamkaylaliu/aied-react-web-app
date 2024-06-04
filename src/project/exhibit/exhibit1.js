// ExhibitPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Exhibit101 from './exhibit101';
import Exhibit102 from './exhibit102';
import Exhibit103 from './exhibit103';
import Exhibit104 from './exhibit104';
import Exhibit105 from './exhibit105';
import Chatbot from './chatbot'; // Import the Chatbot component
import "./exhibit.css";

function Exhibit1() {
    const [activePage, setActivePage] = useState(1);
    const totalPages = 5;

    const goToPreviousPage = () => {
        setActivePage(prevPage => Math.max(prevPage - 1, 1));
    };

    const goToNextPage = () => {
        setActivePage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div>
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-2">
                    {activePage > 1 &&
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="arrow arrow-left"
                            onClick={goToPreviousPage}
                        />
                    }
                </div>
                <div className="exhibit-column exhibit-col-4">
                    <div className="exhibit-linkbar">
                        <h1>01 | ISAAC NEWTON</h1>
                    </div>
                    <div className="exhibit-col-light-blue">
                        {activePage === 1 && <Exhibit101 />}
                        {activePage === 2 && <Exhibit102 />}
                        {activePage === 3 && <Exhibit103 />}
                        {activePage === 4 && <Exhibit104 />}
                        {activePage === 5 && <Exhibit105 />}
                    </div>
                    <div className="dots-container">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <span
                                key={index}
                                className={`dot ${index + 1 === activePage ? 'active' : ''}`}
                                onClick={() => setActivePage(index + 1)}
                            ></span>
                        ))}
                    </div>
                </div>
                <div className="exhibit-column exhibit-col-2">
                    {activePage < totalPages &&
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="arrow arrow-right"
                            onClick={goToNextPage}
                        />
                    }
                    {/* Integrate the Chatbot component here */}
                    <Chatbot />
                </div>
            </div>
        </div>
    );
}

export default Exhibit1;
