import { Link } from "react-router-dom";
import "./links.css";
import maxwell3 from "../images/maxwell3.png";
import newton7 from "../images/newton7.png";

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

                    <img src={maxwell3} className="full-image" />
                </div>
                <div className="column col-2">
                    <img src={maxwell3} className="full-image" />
                    <img src={maxwell3} className="full-image" />
                </div>
                <div className="column col-2">
                    <img src={maxwell3} className="full-image" />
                    <img src={maxwell3} className="full-image" />
                </div>
            </div>
        </div>
    );
}

export default Galleries;
