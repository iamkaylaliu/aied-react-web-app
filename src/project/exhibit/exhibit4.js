// ExhibitPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Exhibit401 from './exhibit401';
import Exhibit402 from './exhibit402';
import Exhibit403 from './exhibit403';
import Exhibit404 from './exhibit404';
import Exhibit405 from './exhibit405';
import Chatbot from './chatbot'; // Import the Chatbot component
import "./exhibit.css";

function Exhibit4() {
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
                        <h1>04 | CHIEN-SHIUNG WU</h1>
                    </div>
                    <div className="exhibit-col-light-blue">
                        {activePage === 1 && <Exhibit401 />}
                        {activePage === 2 && <Exhibit402 />}
                        {activePage === 3 && <Exhibit403 />}
                        {activePage === 4 && <Exhibit404 />}
                        {activePage === 5 && <Exhibit405 />}
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
                    <Chatbot threadId="exhibit4" exhibit="Chien-Shiung Wu" />
                </div>
            </div>
        </div>
    );
}

export default Exhibit4;
