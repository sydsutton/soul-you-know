import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom"
import SidebarComponent from "./SidebarComponent"
import logo2 from "../images/logo2.png"
import {
    Sticky,
    Icon
} from "semantic-ui-react"

const NavbarComponent = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const location = useLocation()
    const dropdown = document.getElementById('nav-dropdown-container')

    const handleEnter = () => {
        dropdown.classList.remove('hidden')
        dropdown.classList.add('visible')
    }

    const handleLeave = () => {
        dropdown.classList.add('hidden')
        dropdown.classList.remove('visible')
    }

    const handleClick = () => {
        if(dropdown.classList.contains('hidden')){
            handleEnter()
        } else {
            handleLeave()
        }
    }


    return (
        <Sticky className="ui fixed menu" style={{border: "none"}}>
            <SidebarComponent 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
                location={location}
            />
            <div className="navbar">
                <div className="empty-div"></div>
                <Link to="/" className="brand-container">
                    <h5>Soul Y</h5>
                    <img src={logo2} alt="soul you know logo" height="40" />
                    <h5>u Know</h5>
                </Link>
                <ul className="navbar-links">
                    <li>
                        <h5><Link to="/" className={location.pathname==="/" ? "active nav-link" : "nav-link"}>Shows</Link></h5>
                    </li>
                    <li>
                        <h5><Link to="/music" className={location.pathname==="/music" ? "active nav-link" : "nav-link"}>Music</Link></h5>
                    </li>

                    {/* dropdown start */}
                    <li onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleClick}>
                        <h5 style={{margin: "0"}}>
                            <Link to="#" className="nav-link">Media<Icon name="caret down" /></Link>
                        </h5>

                        <ul className="nav-dropdown hidden" id="nav-dropdown-container">
                            <li className="nav-link">
                                <h5>
                                    <Link to="/photos" className={location.pathname==="/photos" ? "active nav-link" : "nav-link"}>
                                        Photos
                                    </Link>
                                </h5>
                            </li>
                            <li className="nav-link">
                                <h5>
                                    <Link to="/videos" className={location.pathname==="/videos" ? "active nav-link" : "nav-link"}>
                                        Videos
                                    </Link>
                                </h5>
                            </li>
                        </ul>
                    </li> 
                    {/* dropdown end */}

                    <li>
                        <h5><Link to="/merch" className={location.pathname==="/merch" ? "active nav-link" : "nav-link"}>Merch</Link></h5>
                    </li>
                    <li>
                        <h5><Link to="/contact" className={location.pathname==="/contact" ? "active nav-link" : "nav-link"}>Contact</Link></h5>
                    </li>
                </ul>
                <div className="bars-icon">
                    <i 
                        className="bars large icon" 
                        onClick={() => setSidebarOpen(true)}
                        style={{color: "#ddd"}}
                    />
                </div>
            </div>
        </Sticky>
    );
};

export default NavbarComponent;