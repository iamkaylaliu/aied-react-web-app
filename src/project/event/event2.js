import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Event201 from './event201';
import Event202 from './event202';
import Event203 from './event203';
import Event204 from './event204';
import Event205 from './event205';
import "./event.css";

function Event2() {
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
            <div className="event-links-container">
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
                        <h1>Panel Discussion: Women of No Importance?</h1>
                    </div>
                    <div className="exhibit-col-light-blue">
                        {activePage === 1 && <Event201 />}
                        {activePage === 2 && <Event202 />}
                        {activePage === 3 && <Event203 />}
                        {activePage === 4 && <Event204 />}
                        {activePage === 5 && <Event205 />}
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

export default Event2;
