import React from "react";

function Content({isDarkMode}) {
    return (
       <div className={`container ${isDarkMode ? 'dark-mode':""}` } >

       <h1>Why i should React</h1>
        <ul>
            <li>Because its give more earnings</li>
            <li>Make you Full stack developer</li>
            <li>Gives more value to your carrer</li>
            <li>Demanding in market</li>
        </ul>
       </div>
    )
}

export default Content