import React from 'react';
import {
    Grid,
    Menu,
    Sidebar,
    Dimmer,
    Icon
  } from 'semantic-ui-react'
  import {Link} from "react-router-dom"

const SidebarComponent = ({sidebarOpen, setSidebarOpen, location}) => {

    const iconSize = "large"
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
                        className={location.pathname === "/photos" ? "active" : ""}
                        style={{padding: "0"}}
                    >
                        <Link to="/photos" className="sidebar-link">
                            Photos
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
                        className={location.pathname === "/merch" ? "active" : ""}
                        style={{padding: "0"}}
                    >
                        <Link to="/merch" className="sidebar-link">
                            Merch
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

                    <ul className="nav-social">
                        <li>
                            <a onClick={() => window.open('https://www.instagram.com/soulyouknow/', '_blank')}>
                                <Icon name="instagram" size={iconSize}/>
                            </a>
                        </li>
                        <li>
                            <a onClick={() => window.open('https://www.facebook.com/soulyouknowband', '_blank')}>
                                <Icon name="facebook" size={iconSize} />
                            </a>
                        </li> 
                        <li>
                            <a onClick={() => window.open('https://open.spotify.com/artist/2hxK5s6Gvisb2GOx6Pl1cx', '_blank')}>
                                <Icon name="spotify" size={iconSize} />
                            </a>
                        </li> 
                        <li>
                            <a  onClick={() => window.open('https://music.apple.com/us/artist/soul-you-know/1567783709', '_blank')}>
                                <Icon name="apple" size={iconSize} />
                            </a>
                        </li> 
                        <li>
                            <a onClick={() => window.open('https://www.youtube.com/channel/UCXsqEevMY7FgWP4ASLmKf1A', '_blank')}>
                                <Icon name="youtube" size={iconSize} />
                            </a>
                        </li> 
                    </ul>
                </Sidebar>
            </Grid.Column>
        </Grid>
    );
};

export default SidebarComponent;