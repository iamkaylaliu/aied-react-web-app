import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './chatbot.css';
import fmchatbot from "../images/fmchatbot.png";

function Chatbot({ threadId, exhibit }) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const BASE_API_URL = process.env.REACT_APP_API_BASE || 'http://localhost:4000';

    useEffect(() => {
        // Add initial bot message when component mounts
        addInitialBotMessage();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const addInitialBotMessage = async () => {
        const initialMessage = "Hey there! I'm Richard Feynman, your guide today. Just say 'hi' to get started!";
        setMessages([{ text: initialMessage, sender: 'bot' }]);
    };

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
                body: JSON.stringify({ thread_id: threadId, content: message, exhibit }),
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
        <div className={`chatbot-container ${isScrolled ? 'scrolled' : ''}`}>
            <button className="toggle-chat" onClick={toggleChat}>
                <img src={fmchatbot} alt="Chatbot Icon" style={{ width: '150px' }} />
            </button>

            {isOpen && (
                <div className="chatbot-popup">
                    <div className="chat-header">
                        <div className="avatar">
                            <div className="avatar-circle">RF</div>
                            <div className="avatar-label">Richard</div>
                        </div>
                    </div>
                    <div className="chat-history-container">
                        <div className="chat-history">
                            {messages.map((msg, index) => (
                                <div key={index} className={`message ${msg.sender}`}>
                                    <div className="message-content">
                                        <span className="message-text">{msg.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="input-container">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                placeholder="Ask Feynman!"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            />
                            <button className="send-button" onClick={handleSendMessage}>
                                <FontAwesomeIcon icon={faArrowUp} className="fa-arrow-up" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
