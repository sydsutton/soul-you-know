import React from 'react';
import ShowTable from "./ShowTableComponent"
import cover from "../images/cover.jpg"
import { Parallax } from "react-scroll-parallax"

// import ReactPlayer from 'react-player'

import {
    Divider,
    Container
} from "semantic-ui-react"

const HomeComponent = () => {
    return (
        <div>
            <Parallax speed={-20} className="hero-container">
                <img src={cover} className="hero-image" />
            </Parallax>
            <div className="main-container">
                <Container>
                    <div className="featured-container">
                        <h2>Featured Songs</h2>
                        <Divider style={{margin: "-.5rem 0 2rem"}}/>
                        <div className="ui stackable two column grid iframe-container">
                            <iframe 
                                style={{maxWidth: "30rem", borderRadius: "12px"}}
                                src="https://open.spotify.com/embed/track/5vQn0HXFJ6EHt3mWLTcUam?utm_source=generator" 
                                width="100%" 
                                height="380" 
                                frameBorder="0" 
                                allowfullscreen="" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            />
                            <iframe 
                                style={{maxWidth: "30rem", borderRadius: "12px"}}
                                src="https://open.spotify.com/embed/track/4KVxaBK0jgqOw1tPmREeNO?utm_source=generator" 
                                width="100%" 
                                height="380" 
                                frameBorder="0" 
                                allowfullscreen="" 
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            />
                        </div>
                    </div>
                    <div className="shows-container">
                        <h2>Upcoming Shows</h2>
                        <Divider style={{margin: "-.5rem 0 2rem"}}/>
                        <ShowTable />
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default HomeComponent;