import React from "react";

function Header({ isDarkMode, onClick }) {
    console.log({isDarkMode,onClick});
    return (
        <nav>
            <img src="./images.jpg" alt='react logo' width="100px" />
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Profile</li>
            </ul>
            <div className="toggle-btn" onClick={onClick}>🌙</div>
        </nav>
    )
}

export default Header