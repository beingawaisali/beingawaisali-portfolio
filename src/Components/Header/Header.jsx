import React, { useState } from 'react';
import './header.css';
import logo from '../Images/sample-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faTimes } from '@fortawesome/free-solid-svg-icons';

import moonIcon from "../Images/icons/moon.png";
import sunIcon from "../Images/icons/sun.png";


let Header = (props) => {

    let [switchMode, setSwitchMode] = useState(true);
    let [menuIcon, setMenuIcon] = useState(false);

    return (
        <header id="header">

            {/* Logo */}

            <div id="header-left">
                <div id="logo-container">
                    {/* <img src={logo} id="logo" /> */}
                    <h2>Logo Here...</h2>
                </div>

            </div>

            {/* Menu Bar */}

            <div id="header-mid">
                <div id="menubar">

                    <FontAwesomeIcon icon={props.menuIcon} id="menu-icon" onClick={ props.showMenu }/>
                
                </div>
            </div>

            {/* Header Right */}


            <div id="header-right">

            {/* Social Media Icons */}

                <div id="header-social-media">
                    
                    <a href="https://github.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-icons fab fa-github"></i>
                    </a>
                    <a href="https://facebook.com/beingawaisali.page" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-icons fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/beingawaisali/" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-icons fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/beingawaisali" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-icons fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/beingawaisali/" rel="nofollow noopener noreferrer" target="_blank">
                        <i className="social-icons fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCd5MrYwaqO_a_C28Bby-pPg/videos?view_as=subscriber" rel="nofollow" target="_blank">
                        <i className="social-icons fab fa-youtube"></i>
                    </a>


                </div>

            {/* Switch Mode */}

                <div id="switch-mode">
                    { !switchMode ? <img src={sunIcon} className="sun" onClick={ () => setSwitchMode(true) }/> : <img src={moonIcon} class="moon" onClick={ () => setSwitchMode(false) } /> }
                </div>

            </div>

            {/* Menubar Mobile */}

            <div id="menubar-mobile">
                <FontAwesomeIcon icon={props.menuIcon} id="menu-icon-mobile" onClick={props.showMobileMenu}/>
            </div>


        </header>
    )

}

export default Header;