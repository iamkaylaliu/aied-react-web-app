import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocketchat } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

import './chatbot.css';

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    const toggleChat = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleSendMessage = (message) => {
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
        // Here you can implement logic to send the message to the chatbot API
    };

    return (
        <div>
            {/* Chat icon */}
            <button className="toggle-chat" onClick={toggleChat}>
                <FontAwesomeIcon icon={faRocketchat} style={{ fontSize: "2em", color: "#033E8C" }} />
            </button>

            {/* Popup container */}
            {isOpen && (
                <div className="chatbot-popup">
                    <div className="chat-history-container">
                        <div className="fixed-message">
                            <strong>Feynman:</strong> Ladies and gentlemen, welcome to our journey through the cosmos! I’m Richard Feynman, the bongo-playing physicist. Buckle up, because we’re about to explore the quantum world.
                        </div>
                        <div className="chat-history">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="input-container">
                        <input type="text" placeholder="Ask Feynman..." />
                        <button className="send-button" onClick={() => handleSendMessage('Hello!')}>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} style={{ color: "#fff" }} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;