import React from 'react';
import {
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar
  } from 'semantic-ui-react'
  import {Link} from "react-router-dom"

const SidebarComponent = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <div>
            <Grid>
                <Grid.Column>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        icon='labeled'
                        direction="right"
                        inverted
                        onHide={() => setSidebarOpen(false)}
                        vertical
                        visible={sidebarOpen}
                        width='thin'
                    >
                        <Menu.Item as='a'>
                            <Link to="/">
                                <Icon name='home' />
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Link to="/shows">
                                <Icon name='ticket' />
                                Shows
                            </Link>
                        </Menu.Item>
                        <Menu.Item as='a'>
                            <Link to="/music">
                                <Icon name='music' />
                                Music
                            </Link>
                        </Menu.Item>
                    </Sidebar>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default SidebarComponent;