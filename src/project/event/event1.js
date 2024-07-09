import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Event101 from './event101';
import Event102 from './event102';
import Event103 from './event103';
import Event104 from './event104';
import "./exhibit.css";

function Event1() {
    const [activePage, setActivePage] = useState(1);
    const totalPages = 4;

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
                        <h1>The Gravity Debate: Newton vs. Einstein</h1>
                    </div>
                    <div className="exhibit-col-light-blue">
                        {activePage === 1 && <Event101 />}
                        {activePage === 2 && <Event102 />}
                        {activePage === 3 && <Event103 />}
                        {activePage === 4 && <Event104 />}
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
                </div>
            </div>
        </div>
    );
}

export default Event1;
