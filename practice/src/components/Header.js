import React from "react";

function Header({isDarkModeEnable,onClickFunction}) {
    return (
        <nav>
            <img src="./images.jpg" alt='react logo' width="100px"/>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Profile</li>
            </ul>
            <div class="toggle-btn" onclick="toggleDarkMode()">🌙</div>
        </nav>
    )
}

export default Header