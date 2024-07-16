import React from "react";
import "./bottom.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Bottom() {
    return (
        <div className="bottom-container">
            <div className="col">
                <div className="bottombar-logo">
                    <Link to="/project/home">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="navbar-title">
                    <h2>UNVEILING GENIUS</h2>
                    <h3>Virtual Science Museum</h3>
                </div>
                <p>Welcome to our AI-powered virtual museum! Explore six historical scientists and chat with the Richard Feynman chatbot, all designed for learning and fun as part of a student project. Please respect the educational focus before sharing. Enjoy your visit!</p>
            </div>
            <div className="col">
                <h3>ADDRESS</h3>
                <p>123 Future Avenue</p>
                <p>Quantum City, Virtual Reality</p>
                <p>Cosmos Central, AI Universe</p>
            </div>
            <div className="col">
                <h3>FOLLOW US</h3>
                <p>icon 1 | icon 2 | icon 3</p>
            </div>
        </div>
    );
}

export default Bottom;
