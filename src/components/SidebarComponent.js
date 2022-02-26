import React from 'react';
import {
    Grid,
    Menu,
    Sidebar,
    Dimmer
  } from 'semantic-ui-react'
  import {Link} from "react-router-dom"

const SidebarComponent = ({sidebarOpen, setSidebarOpen, location}) => {
    return (
        <Grid>
            <Grid.Column>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    direction="right"
                    onHide={() => setSidebarOpen(false)}
                    vertical
                    inverted
                    visible={sidebarOpen}
                    className="sidebar"
                >
                    <Menu.Item 
                        onClick={() => setSidebarOpen(false)}
                        className={location.pathname === "/" ? "active" : ""}
                        style={{padding: "0"}}
                    >
                        <Link to="/" className="sidebar-link">
                            Shows
                        </Link>
                    </Menu.Item>
                    <Menu.Item 
                        onClick={() => setSidebarOpen(false)}
                        className={location.pathname === "/music" ? "active" : ""}
                        style={{padding: "0"}}
                    >
                        <Link to="/music" className="sidebar-link">
                            Music
                        </Link>
                    </Menu.Item>
                    <Menu.Item 
                        onClick={() => setSidebarOpen(false)}
                        className={location.pathname === "/videos" ? "active" : ""}
                        style={{padding: "0"}}
                    >
                        <Link to="/videos" className="sidebar-link">
                            Videos
                        </Link>
                    </Menu.Item>
                    <Menu.Item 
                        onClick={() => setSidebarOpen(false)}
                        className={location.pathname === "/contact" ? "active" : ""}
                        style={{padding: "0"}}
                    >
                        <Link to="/contact" className="sidebar-link">
                            Contact / Book
                        </Link>
                    </Menu.Item>
                </Sidebar>
            </Grid.Column>
        </Grid>
    );
};

export default SidebarComponent;