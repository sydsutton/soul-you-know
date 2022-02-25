import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom"
import SidebarComponent from "./SidebarComponent"
import logo from "../images/navlogo.png"
import {
    Sticky,
} from "semantic-ui-react"

const NavbarComponent = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const location = useLocation()

    return (
        <Sticky className="ui fixed menu" style={{border: "none"}}>
            <SidebarComponent 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
                location={location}
            />
            <div className="navbar">
                <Link to="/" className="brand-container">
                    <img src={logo} alt="soul you know logo" height="40" />
                    <h5>Soul You Know</h5>
                </Link>
                <ul className="navbar-links">
                    <li>
                        <Link to="/" className={location.pathname==="/" ? "active nav-link" : "nav-link"}>Home</Link>
                    </li>
                    <li>
                        <Link to="/music" className={location.pathname==="/music" ? "active nav-link" : "nav-link"}>Music</Link>
                    </li>
                    <li>
                        <Link to="/videos" className={location.pathname==="/videos" ? "active nav-link" : "nav-link"}>Videos</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={location.pathname==="/contact" ? "active nav-link" : "nav-link"}>Contact</Link>
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