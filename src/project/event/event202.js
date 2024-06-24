// Exhibit1.js
import React from 'react';
import "./exhibit.css";
import nt2 from "../images/nt2.jpeg";

function Event202() {
    return (
        <div className="exhibit-column exhibit-col-light-blue">
            <div className="exhibit-links-container">
                <div className="exhibit-column exhibit-col-1">
                    <img src={nt2} className="exhibit-half-image" />
                </div>
                <div className="exhibit-column exhibit-col-1 exhibit-text-column">
                    <div className="text-content">
                        <p><strong>Feynman (Moderator):</strong></p>
                        <p>Thank you all for those introductions. The title of this panel, "Women of No Importance," is quite ironic given your significant contributions. How do you feel about the recognition of women in science historically?</p>
                        <p><strong>Ada Lovelace:</strong></p>
                        <p>Historically, women’s contributions to science and technology have often been overlooked or attributed to their male counterparts. In my time, societal expectations limited women’s roles, but I was fortunate to have the support of my mother and mentors who encouraged my interest in mathematics and science.</p>
                        <p><strong>Chien-Shiung Wu:</strong></p>
                        <p>I agree. Even though my work was critical to the field of physics, it was my male colleagues who received the Nobel Prize. Recognition is slowly improving, but there is still much progress to be made. Women in science often have to work harder to gain the same recognition as men.</p>
                        <p><strong>Hedy Lamarr:</strong></p>
                        <p>It’s true. While my inventions were crucial, they weren’t taken seriously at the time because I was seen primarily as an actress. It wasn’t until much later that my contributions to technology were recognized. It’s important to challenge stereotypes and ensure women receive the credit they deserve.</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Event202;
