import React, { useState } from 'react';
import {Link} from "react-router-dom"
import SidebarComponent from "./SidebarComponent"
import {
    Sticky
} from "semantic-ui-react"

const NavbarComponent = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <Sticky className="ui fixed menu">
            <SidebarComponent sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="navbar">
                <h1 onClick={() => setSidebarOpen(true)}>NavbarComponent</h1>
                <ul className="navbar-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shows">Shows</Link>
                    </li>
                    <li>
                        <Link to="/music">Music</Link>
                    </li>
                </ul>
            </div>
        </Sticky>
    );
};

export default NavbarComponent;