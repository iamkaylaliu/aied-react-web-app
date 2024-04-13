import "./links.css";
import newton4 from "../images/newton4.png";
import newton5 from "../images/newton5.jpeg";
import einstein8 from "../images/einstein8.png";
import einstein3 from "../images/einstein3.jpg";

function Links() {
    return (
        <div>
            <div className="linkbar">
                <h1>LINKS</h1>
            </div>
            <div className="links-container">
                <div className="column col-2">
                    <img src={newton4} className="full-image" />
                    <img src={newton5} className="full-image" />
                </div>
                <div className="column col-4 col-light-blue">
                    <h2>Physics Related Collections</h2>
                    <p>collection 1</p>
                    <p>collection 2</p>
                    <p>collection 3</p>
                </div>
                <div className="column col-4 col-dark-blue">
                    <h2>Recommendations</h2>
                    <p>recommendation 1</p>
                    <p>recommendation 2</p>
                    <p>recommendation 3</p>
                </div>
                <div className="column col-2">
                    <img src={einstein3} className="full-image" />
                    <img src={einstein8} className="full-image" />
                </div>
            </div>
        </div>
    );
}

export default Links;
