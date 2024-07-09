import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import './chatbot.css';
import fmchatbot from "../images/fmchatbot.png";

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [threadId] = useState('your_thread_id'); // Use a fixed thread_id for simplicity

    const BASE_API_URL = process.env.REACT_APP_API_BASE || 'http://localhost:4000';

    const toggleChat = () => {
        setIsOpen(prevState => !prevState);
    };

    const sendMessage = async () => {
        const message = inputValue;

        try {
            const response = await fetch(`${BASE_API_URL}/api/assistant/thread/message`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ thread_id: threadId, content: message }),
            });

            if (!response.ok) {
                throw new Error('Failed to send message to backend');
            }

            const data = await response.json();
            console.log('Message sent to backend:', data);

            displayResponse(data.choices[0].message.content);
        } catch (error) {
            console.error('Error sending message to backend:', error);
        }
    };

    const displayResponse = (content) => {
        setMessages(prevMessages => [...prevMessages, { text: content, sender: 'bot' }]);
    };

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;

        setMessages(prevMessages => [...prevMessages, { text: inputValue, sender: 'user' }]);
        sendMessage();
        setInputValue('');
    };

    return (
        <div>
            <button className="toggle-chat" onClick={toggleChat}>
                {/* <FontAwesomeIcon icon={faRocketchat} style={{ fontSize: "2.5em", color: "#033E8C" }} /> */}
                <img src={fmchatbot} alt="Chatbot Icon" style={{ width: '150px' }} />
            </button>

            {isOpen && (
                <div className="chatbot-popup">
                    <div className="chat-history-container">
                        <div className="message initial-message">
                            <div className="message-content">
                                <span className="sender-label">Feynman:</span>
                                <span className="message-text">Hey there! I'm Richard Feynman, your guide today. Just say "hi" to get started!</span>
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
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button className="send-button" onClick={handleSendMessage}>
                            <FontAwesomeIcon icon={faArrowUpFromBracket} style={{ color: "#fff" }} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
