// ExhibitPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Exhibit201 from './exhibit201';
import Exhibit202 from './exhibit202';
import Exhibit203 from './exhibit203';
import Exhibit204 from './exhibit204';
import Exhibit205 from './exhibit205';
import Chatbot from './chatbot'; // Import the Chatbot component
import "./exhibit.css";

function Exhibit2() {
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
                        <h1>02 | ADA LOVELACE</h1>
                    </div>
                    <div className="exhibit-col-light-blue">
                        {activePage === 1 && <Exhibit201 />}
                        {activePage === 2 && <Exhibit202 />}
                        {activePage === 3 && <Exhibit203 />}
                        {activePage === 4 && <Exhibit204 />}
                        {activePage === 5 && <Exhibit205 />}
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

export default Exhibit2;
