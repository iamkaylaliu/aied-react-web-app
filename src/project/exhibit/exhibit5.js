// ExhibitPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Exhibit501 from './exhibit501';
import Exhibit502 from './exhibit502';
import Exhibit503 from './exhibit503';
import Exhibit504 from './exhibit504';
import Exhibit505 from './exhibit505';
import Chatbot from './chatbot'; // Import the Chatbot component
import "./exhibit.css";

function Exhibit5() {
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
                        <h1>05 | HEDY LAMARR</h1>
                    </div>
                    <div className="exhibit-col-light-blue">
                        {activePage === 1 && <Exhibit501 />}
                        {activePage === 2 && <Exhibit502 />}
                        {activePage === 3 && <Exhibit503 />}
                        {activePage === 4 && <Exhibit504 />}
                        {activePage === 5 && <Exhibit505 />}
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

export default Exhibit5;
