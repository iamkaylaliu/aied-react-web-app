// ExhibitPage.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Exhibit101 from './exhibit101';
import Exhibit102 from './exhibit102';
import Exhibit103 from './exhibit103';
import "./exhibit.css";

function Exhibit1() {
    // Define state to manage active page
    const [activePage, setActivePage] = useState(1);

    // Total number of pages
    const totalPages = 5; // Change this according to the number of exhibit pages

    // Function to handle navigation to previous page
    const goToPreviousPage = () => {
        setActivePage(prevPage => Math.max(prevPage - 1, 1));
    };

    // Function to handle navigation to next page
    const goToNextPage = () => {
        setActivePage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    return (
        <div>
            <div className="exhibit-links-container">
                {/* First column for navigation arrows */}
                <div className="exhibit-column exhibit-col-2">
                    {/* Conditionally render previous arrow */}
                    {activePage > 1 &&
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            className="arrow arrow-left"
                            onClick={goToPreviousPage}
                        />
                    }
                </div>
                {/* Second column for exhibit content */}
                <div className="exhibit-column exhibit-col-4">
                    <div className="exhibit-linkbar">
                        <h1>01 | ISAAC NEWTON</h1>
                    </div>
                    <div className="exhibit-col-light-blue">
                        {/* Render the active page based on state */}
                        {activePage === 1 && <Exhibit101 />}
                        {activePage === 2 && <Exhibit102 />}
                        {activePage === 3 && <Exhibit103 />}
                        {/* Add more Exhibit components for additional pages */}
                    </div>
                    {/* Render dots for navigation */}
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
                {/* Third column for navigation arrows */}
                <div className="exhibit-column exhibit-col-2">
                    {/* Conditionally render next arrow */}
                    {activePage < totalPages &&
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            className="arrow arrow-right"
                            onClick={goToNextPage}
                        />
                    }
                </div>
            </div>
        </div>
    );
}

export default Exhibit1;
