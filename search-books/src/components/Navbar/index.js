import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expland-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Books
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="navbar-item">
                        <Link to="/" className={window.location.pathname === "/" ||
                            window.location.pathname === "/about"
                            ? "nav-link active"
                            : "nav-link"
                        }>
                            About
                    </Link>
                    </li>
                    <li className = "nav-item">
                        <Link to = "/discover" className = {windows.location.pathname === "/discover" ? "nav-link active" : "nav-link"}>Discover</Link>
                    </li>

                    <li className = "nav-item">
                        <Link to = "/search" className = {windows.location.pathname === "/search" ? "nav-link active" : "nav-link"}>Search</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;