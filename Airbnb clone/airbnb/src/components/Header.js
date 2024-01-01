import React from 'react';
import Logo from '../images/airbnb 1.png'

function Header() {
  return (
     <nav>
        <img className='nav--logo' src={Logo} alt='Arabnb  Logo'/>
     </nav>
  );
}

export default Header;