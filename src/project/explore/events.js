import { Link } from "react-router-dom";
import "./links.css";
import "./galleries.css";
import ntvs from "../images/ntvs.jpeg";
import all from "../images/all.jpeg";
import adaft from "../images/adaft.jpeg";

function Events() {
    return (
        <div>
            <div className="linkbar">
                <h1>EVENTS</h1>
            </div>
            <div className="links-container">
                <div className="column-galleries col-2">
                    <Link to="../event/event1">
                        <img src={ntvs} className="full-image-galleries" />
                    </Link>
                </div>
                <div className="column-galleries col-2">
                    <Link to="../event/event2">
                        <img src={adaft} className="full-image-galleries" />
                    </Link>
                </div>
                <div className="column-galleries col-2">
                    <Link to="../event/event3">
                        <img src={all} className="full-image-galleries" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Events;
