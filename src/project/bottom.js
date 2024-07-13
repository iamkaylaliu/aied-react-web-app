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
                <p>This virtual museum is intended solely for internal educational use as part of a student project. Please respect its non-commercial nature and consider the context before sharing its contents.</p>
            </div>
            <div className="col">
                <h3>ADDRESS</h3>
                <p>address line 1</p>
                <p>address line 2</p>
                <p>address line 3</p>
            </div>
            <div className="col">
                <h3>FOLLOW US</h3>
                <p>icon 1 | icon 2 | icon 3</p>
            </div>
        </div>
    );
}

export default Bottom;
