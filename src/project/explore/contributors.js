
import "./links.css";
import newton4 from "../images/newton4.png";
import newton5 from "../images/newton5.jpeg";
import einstein8 from "../images/einstein8.png";
import einstein3 from "../images/einstein3.jpg";

import chatgpt from "../images/chatgpt.png";
import freakonomics from "../images/feakonomics.jpeg";
import aapm from "../images/aapm.png";

function Contributors() {
    return (
        <div>
            <div className="linkbar">
                <h1>CONTRIBUTORS</h1>
            </div>
            <div className="links-container">
                <div className="column col-2">
                    <img src={newton4} className="full-image" />
                    <img src={newton5} className="full-image" />
                </div>
                <div className="column col-4 contact-col-light-blue">
                    <h2><em>Featured Reviews</em></h2>
                    <div className="quote">"Very nice video. Very interesting project. Science taught by historical figures is quite inspiring to those who want to make great discoveries someday themselves." </div>
                    <div className="author"> — Jim Spohrer, Ph.D., Board of Directors, ISSIP & ServCollab; Senior Fellow, UIDP; Retired Industry Executive, Apple & IBM; Author of <em>Service in the AI Era</em></div>
                    <div></div>
                    <div className="quote">"Fascinating idea." "Great session today 😎"</div>
                    <div className="author"> — Ted Kahn, Ph.D., CEO and Chief Futurist & Learning Architect at DesignWorlds for Learning, Inc. & DesignWorlds for College & Careers</div>
                    <div></div>
                    <div className="quote">"That sounds fun." "It sounds cool."</div>
                    <div className="author"> — Jeremy Roschelle, Ph.D., Executive Director at Digital Promise; AI & Emerging Technologies for Education, Research and Policy</div>
                    <div></div>
                    <h2><em>Inspirations</em></h2>
                    <div className="image-links">
                        <a href="https://chat.openai.com/"><img src={chatgpt} className="half-image" /></a>
                        <a href="https://museum.aapm.org/"><img src={aapm} className="half-image" /></a>
                        <a href="https://freakonomics.com/"><img src={freakonomics} className="half-image" /></a>
                    </div>
                </div>
                <div className="column col-2">
                    <img src={einstein3} className="full-image" />
                    <img src={einstein8} className="full-image" />
                </div>
            </div>
        </div>
    );
}

export default Contributors;
