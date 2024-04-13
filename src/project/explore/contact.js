// Links.js
import "./links.css";
import newton4 from "../images/newton4.png";
import newton5 from "../images/newton5.jpeg";
import einstein8 from "../images/einstein8.png";
import einstein3 from "../images/einstein3.jpg";

function Contact() {
    return (
        <div>
            <div className="linkbar">
                <h1>CONTACT</h1>
            </div>
            <div className="links-container">
                <div className="column col-2">
                    <img src={newton4} className="full-image" />
                    <img src={newton5} className="full-image" />
                </div>
                <div className="column col-4 contact-col-light-blue">
                    <h2>Contact Form</h2>
                    <p>info 1</p>
                    <p>info 2</p>
                    <p>info 3</p>
                </div>
                <div className="column col-2">
                    <img src={einstein3} className="full-image" />
                    <img src={einstein8} className="full-image" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
