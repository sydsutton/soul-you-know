import React, { useEffect } from 'react';
import Members from "./MembersComponent"
import { Parallax } from "react-scroll-parallax"
import {showsList} from "../data/showsList"

import {
    Divider,
    Container,
    Grid,
    Icon
} from "semantic-ui-react"

const HomeComponent = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    
    return (
        <div>

            <Parallax speed={-50} className="hero-container" translateY={[-50, 40]}>
                <div className="hero-image"/>
            </Parallax>

            <div className="main-container">
                <Container>
                    <Grid>
                        <Grid.Column mobile={16} tablet={16} computer={8} className="featured-container">
                            <h2>Featured</h2>
                            <Divider style={{margin: "-.5rem 0 2rem"}}/>
                            <div className="ui stackable two column grid iframe-container">

                                <iframe 
                                    allow="autoplay *; encrypted-media *; fullscreen *" 
                                    frameborder="0" 
                                    height="150" 
                                    style={{width:"100%", maxWidth: "660px", overflow: "hidden", background: "transparent"}}
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                                    src="https://embed.music.apple.com/us/album/fishbowl/1567786639?i=1567786640">
                                    
                                    </iframe>
                            </div>
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={16} computer={8} className="shows-container">
                            <h2>Upcoming Shows</h2>
                            <Divider style={{margin: "-.5rem 0 2rem"}}/>

                            {showsList.map((show, index) => {
                                return (
                                    <div className="show-container" key={index}>
                                        <div className="show-title">
                                            <h4>{show.date}</h4>
                                            <h2>{show.venue}</h2>
                                            <h5>Cover- {show.cover}</h5>
                                            <a href="#" onClick={() => window.open(show.link, '_blank')} className="site-link-container">
                                                <Icon name="external square alternate" />
                                                <p>{show.link}</p>
                                            </a>
                                            <a href="#" onClick={() => window.open(`https://www.google.com/maps/place/${show.address}`, '_blank')} className="address-container">
                                                <Icon name="point" />
                                                <p>{show.address}</p>
                                            </a>
                                        </div>
                                        <Divider />
                                    </div>
                                )
                            })}
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>

            <Parallax speed={-20} className="middle-container">
                <div className="middle-image"/>
            </Parallax>

            <div className="member-parent-container" style={{paddingBottom: "7rem"}}>
                <Container>
                    <Grid>
                        <Grid.Column>
                            <h2>Meet the band</h2>
                            <Divider/>

                            <Members />

                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default HomeComponent;