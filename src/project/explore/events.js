import { Link } from "react-router-dom";
import "./links.css";
import maxwell3 from "../images/maxwell3.png";
import maxwell6 from "../images/maxwell6.png";
import newton7 from "../images/newton7.png";
import curie8 from "../images/curie8.png";
import einstein9 from "../images/einstein9.png";
import hedy7 from "../images/hedy7.png";
import feynman9 from "../images/feynman9.png";

function Events() {
    return (
        <div>
            <div className="linkbar">
                <h1>EVENTS</h1>
            </div>
            <div className="links-container">
                <div className="column col-2">
                    <Link to="../event/event1">
                        <img src={newton7} className="full-image" />
                    </Link>
                    <img src={einstein9} className="full-image" />
                </div>
                <div className="column col-2">
                    <img src={maxwell6} className="full-image" />
                    <img src={hedy7} className="full-image" />
                </div>
                <div className="column col-2">
                    <img src={curie8} className="full-image" />
                    <img src={feynman9} className="full-image" />
                </div>
            </div>
        </div>
    );
}

export default Events;
