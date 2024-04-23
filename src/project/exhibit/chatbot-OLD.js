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
            // Set up the initial conversation context
            const initialPrompt = "You are speaking with Richard Feynman, the renowned physicist.";

            // Combine the initial prompt with the user's message
            const prompt = `${initialPrompt}\nUser: ${userMessage}`;

            // Make a request to the GPT-3.5 API to generate a response
            const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer sk-proj-aAdwok6U6ISI2S0Pcs11T3BlbkFJ7hsxCl2JHqkWbDIoQKAx' // Replace with your project-based API key
                },
                body: JSON.stringify({
                    model: 'text-davinci-003', // Adjust the model based on your preference
                    prompt: prompt,
                    max_tokens: 50 // Adjust the max_tokens based on your preference
                })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch response from the server');
            }

            const data = await response.json();

            // Extract the generated response from the API response
            const generatedResponse = data.choices[0].text.trim();

            return generatedResponse;
        } catch (error) {
            console.error('Error:', error);
            // Handle error, e.g., display an error message in the chat
            return "An error occurred while generating the response.";
        }
    };

    const handleSendMessage = async (message) => {
        // Add the user's message to the chat history
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);

        try {
            // Generate response from Richard Feynman using GPT-3.5
            const botResponse = await generateFeynmanResponse(message);

            // Add the bot's response to the chat history
            setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
        } catch (error) {
            console.error('Error:', error);
            // Handle error, e.g., display an error message in the chat
        }
    };

    return (
        <div>
            {/* Chat icon */}
            <button className="toggle-chat" onClick={toggleChat}>
                <FontAwesomeIcon icon={faRocketchat} style={{ fontSize: "2.5em", color: "#033E8C" }} />
            </button>

            {/* Popup container */}
            {isOpen && (
                <div className="chatbot-popup">
                    <div className="chat-history-container">
                        <div className="fixed-message">
                            {/* Default introduction from Feynman */}
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
                        <input type="text" placeholder="Ask Feynman!" onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e.target.value)} />
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
