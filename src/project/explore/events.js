import { Link } from "react-router-dom";
import "./links.css";
import ntvs from "../images/ntvs.jpeg";
import ntft from "../images/ntft.jpeg";
import adaft from "../images/adaft.jpeg";
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
                        <img src={ntvs} className="full-image" />
                    </Link>
                    {/* <img src={einstein9} className="full-image" /> */}
                </div>
                <div className="column col-2">
                    <img src={adaft} className="full-image" />
                    {/* <img src={hedy7} className="full-image" /> */}
                </div>
                <div className="column col-2">
                    <img src={ntft} className="full-image" />
                    {/* <img src={feynman9} className="full-image" /> */}
                </div>
            </div>
        </div>
    );
}

export default Events;
