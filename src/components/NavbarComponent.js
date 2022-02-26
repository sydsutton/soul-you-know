import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom"
import SidebarComponent from "./SidebarComponent"
import logo2 from "../images/logo2.png"
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
                    <li>
                        <h5><Link to="/videos" className={location.pathname==="/videos" ? "active nav-link" : "nav-link"}>Videos</Link></h5>
                    </li>
                    <li>
                        <h5><Link to="/contact" className={location.pathname==="/contact" ? "active nav-link" : "nav-link"}>Contact / Book</Link></h5>
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