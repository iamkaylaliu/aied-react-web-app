// ExhibitPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Exhibit301 from './exhibit301';
import Exhibit302 from './exhibit302';
import Exhibit303 from './exhibit303';
import Exhibit304 from './exhibit304';
import Exhibit305 from './exhibit305';
import Chatbot from './chatbot'; // Import the Chatbot component
import "./exhibit.css";

function Exhibit3() {
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
                        <h1>03 | ALBERT EINSTEIN</h1>
                    </div>
                    <div className="exhibit-col-light-blue">
                        {activePage === 1 && <Exhibit301 />}
                        {activePage === 2 && <Exhibit302 />}
                        {activePage === 3 && <Exhibit303 />}
                        {activePage === 4 && <Exhibit304 />}
                        {activePage === 5 && <Exhibit305 />}
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
                    <Chatbot threadId="exhibit3" exhibit="Albert Einstein" />
                </div>
            </div>
        </div>
    );
}

export default Exhibit3;
