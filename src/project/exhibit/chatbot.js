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

    const generateFeynmanResponse = async (userMessage) => {
        try {
            const initialPrompt = "You are speaking as Richard Feynman, the renowned physicist.";
            const prompt = `${initialPrompt}\nUser: ${userMessage}`;

            const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer GPT_API_Key'
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    prompt: prompt,
                    max_tokens: 50
                })
            });

            if (!response.ok) {
                throw new Error('Hello!');
            }

            const data = await response.json();
            const generatedResponse = data.choices[0].text.trim();

            return generatedResponse;
        } catch (error) {
            console.error('Error:', error);
            return "Apple, Laws, Insight.";
        }
    };


    const handleSendMessage = async (message) => {
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);

        try {
            const botResponse = await generateFeynmanResponse(message);
            setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            document.querySelector('input[type="text"]').value = '';
        }
    };

    return (
        <div>
            <button className="toggle-chat" onClick={toggleChat}>
                <FontAwesomeIcon icon={faRocketchat} style={{ fontSize: "2.5em", color: "#033E8C" }} />
            </button>

            {isOpen && (
                <div className="chatbot-popup">
                    <div className="chat-history-container">
                        <div className="message">
                            <div className="message-content">
                                <span className="sender-label">Feynman:</span>
                                <span className="message-text">Ladies and gentlemen, welcome to our journey through the cosmos! I’m Richard Feynman, the bongo-playing physicist. Buckle up, because we’re about to explore the quantum world.</span>
                            </div>
                        </div>
                        <div className="chat-history">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    <div className="message-content">
                                        <span className="sender-label">{msg.sender === 'user' ? 'User:' : 'Feynman:'}</span>
                                        <span className="message-text">{msg.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Ask Feynman!"
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(e.target.value)}
                        />
                        <button className="send-button" onClick={() => handleSendMessage('')}>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} style={{ color: "#fff" }} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
