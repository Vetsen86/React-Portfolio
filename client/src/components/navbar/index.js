import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm">
                <a className="navbar-brand" target="_blank" href="https://www.linkedin.com/in/erik-beckstrand-1b1a8818a/">Erik Beckstrand</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/portfolio">
                                <a className="nav-link" href="/portfolio">Portfolio</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">
                                <a className="nav-link" href="/contact">Contact</a>
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
}