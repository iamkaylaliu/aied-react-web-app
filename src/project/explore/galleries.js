import { Link } from "react-router-dom";
import "./links.css";
import ada1 from "../images/ada1.png";
import newton7 from "../images/newton7.png";
import einstein9 from "../images/einstein9.png";
import wu1 from "../images/wu1.png";
import hedy7 from "../images/hedy7.png";
import feynman9 from "../images/feynman9.png";

function Galleries() {
    return (
        <div>
            <div className="linkbar">
                <h1>GALLERIES</h1>
            </div>
            <div className="links-container">
                <div className="column col-2">
                    <Link to="../exhibit/exhibit1">
                        <img src={newton7} className="full-image" />
                    </Link>
                    <Link to="../exhibit/exhibit4">
                        <img src={wu1} className="full-image" />
                    </Link>
                </div>
                <div className="column col-2">
                    <Link to="../exhibit/exhibit2">
                        <img src={ada1} className="full-image" />
                    </Link>
                    <Link to="../exhibit/exhibit5">
                        <img src={hedy7} className="full-image" />
                    </Link>
                </div>
                <div className="column col-2">
                    <Link to="../exhibit/exhibit3">
                        <img src={einstein9} className="full-image" />
                    </Link>
                    <Link to="../exhibit/exhibit6">
                        <img src={feynman9} className="full-image" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Galleries;
