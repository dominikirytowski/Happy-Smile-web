import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click); //setting click to opposite state
    const closeMobileMenu = () => setClick(false);


    return (
       <>
           <nav className="navbar">
               <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            Happy Smile &nbsp; <i className="fas fa-globe-europe"></i>
                    </Link>
                   <div className="menu-icon" onClick={handleClick}>
                       <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                       <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                General
                            </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/customers' className='nav-links' onClick={closeMobileMenu}>
                               Our Customers
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                               Contact
                           </Link>
                       </li>
                       <li className='nav-item'>
                           <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                               English
                           </Link>
                       </li>
                   </ul>
               </div>
           </nav>
       </>
    )
}

export default Navbar;
