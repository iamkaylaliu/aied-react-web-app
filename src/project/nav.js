import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import logo from "./logo.png";
import "./nav.css";

function Nav() {
    const { pathname } = useLocation();
    const links = [
        { to: "/project/home", label: "HOME" },
        { to: "/project/galleries", label: "GALLERIES" },
        { to: "/project/events", label: "EVENTS" },
        { to: "/project/links", label: "LINKS" },
        { to: "/project/contributors", label: "CONTRIBUTORS" },
        { to: "/project/contact", label: "CONTACT" },
    ];
    const active = (path) => (pathname.includes(path) ? "active" : "");

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="navbar-title">
                <h2>UNVEILING GENIUS</h2>
                <h3>Virtual Science Museum</h3>
            </div>
            <div className="navbar-links">
                {links.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`navbar-link ${active(link.to)}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Nav;

