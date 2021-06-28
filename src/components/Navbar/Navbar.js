import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick=() => setClick(!click);
    const closeMobileMenu=() => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-logo'>
                        <Link to='/'  className='navbar-logo-link' onClick={closeMobileMenu}>
                            YOUR NAME
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick} >
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                PROJECTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div >  
            </nav>
        </>
    );
}

export default Navbar;
