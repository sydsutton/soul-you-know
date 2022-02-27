import React, { useEffect } from 'react';
import Members from "./MembersComponent"
import MailingList from "./MailingListComponent"
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
        <div >

            <div className="mailing-container">
                <MailingList />
            </div>

            <Parallax speed={-30} className="hero-container" translateY={[-50, 40]}>
                <div className="hero-image"/>
            </Parallax>

            <div className="main-container">
                <Container>
                    <Grid>
                        <Grid.Column mobile={16} tablet={16} computer={8} className="featured-container">
                            <h2>Featured Song</h2>
                            <Divider style={{margin: "-.5rem 0 2rem"}}/>
                            <div className="ui stackable two column grid iframe-container">
                                <iframe 
                                    style={{maxWidth: "30rem", borderRadius: "12px"}}
                                    src="https://open.spotify.com/embed/track/5vQn0HXFJ6EHt3mWLTcUam?utm_source=generator" 
                                    width="100%" 
                                    title="Fishbowl"
                                    height="380" 
                                    frameBorder="0" 
                                    allowFullScreen="" 
                                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                />
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

            <Parallax speed={-30} className="middle-container" translateY={[-50, 40]}>
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