import React from "react";

const Contact = () => {
    return (
        <div className="container contact">
            <h1>Contact Info</h1>
            <p><strong>Email Address:</strong></p>
            <p>erik.beckstrand@gmail.com</p>
            <p><strong>Phone Number:</strong></p>
            <p>385-227-0865</p>
            <a className="btn btn-primary contact-link" href="https://github.com/Vetsen86" target="_blank">Github</a>
            <a className="btn btn-primary contact-link" href="https://www.linkedin.com/in/erik-beckstrand-1b1a8818a/" target="_blank">LinkedIn</a>
        </div>
    );
}

export default Contact;