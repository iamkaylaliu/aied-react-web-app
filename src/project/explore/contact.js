import React, { useState } from "react";
import "./links.css";
import "./contact.css";
import newton4 from "../images/newton4.png";
import newton5 from "../images/newton5.jpeg";
import einstein8 from "../images/einstein8.png";
import einstein3 from "../images/einstein3.jpg";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:liu.chang31@northeastern.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div>
            <div className="linkbar">
                <h1>CONTACT</h1>
            </div>
            <div className="links-container">
                <div className="column-contact col-2-contact">
                    <img src={newton4} className="full-image-contact" alt="Newton" />
                    <img src={newton5} className="full-image-contact" alt="Newton" />
                </div>
                <div className="column-contact col-4-contact newcontact-col-light-blue">
                    <div className="contact-info-container">
                        <h3><em>Got a question for us?</em></h3>
                        <h3><em>Want to add to our collection?</em></h3>
                        <h3><em>Let's get in touch!</em></h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="label-input-container">
                            <div>
                                <label htmlFor="name">Name:</label>
                                <br />
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="contact-input" required />
                            </div>
                        </div>
                        <div className="label-input-container">
                            <div>
                                <label htmlFor="email">Email Address:</label>
                                <br />
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="contact-input" required />
                            </div>
                        </div>
                        <div className="label-input-container">
                            <div>
                                <label htmlFor="subject">Subject:</label>
                                <br />
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="contact-input" required />
                            </div>
                        </div>
                        <div className="label-input-container">
                            <div>
                                <label htmlFor="message">Message:</label>
                                <br />
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="message-textarea" required></textarea>
                            </div>
                        </div>
                        <button type="submit" className="send-button-contact">Send</button>
                    </form>
                </div>
                <div className="column-contact col-2-contact">
                    <img src={einstein3} className="full-image-contact" alt="Einstein" />
                    <img src={einstein8} className="full-image-contact" alt="Einstein" />
                </div>
            </div>
        </div>
    );
}

export default Contact;
