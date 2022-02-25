import React from 'react';
import ShowTable from "./ShowTableComponent"
import background from "../images/background.png"
import { Parallax } from "react-scroll-parallax"

// import ReactPlayer from 'react-player'

import {
    Divider,
    Container
} from "semantic-ui-react"

const HomeComponent = () => {
    return (
        <>
            <Parallax speed={-50} className="hero-container">
                <img src={background} className="hero-image" />
            </Parallax>

            <div className="featured-container">
                <Container>
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
                </Container>
            </div>

            <div className="shows-container">
                <Container>
                    <h2>Upcoming Shows</h2>
                    <Divider style={{margin: "-.5rem 0 2rem"}}/>
                    <ShowTable />
                </Container>
            </div>
        </>
    );
};

export default HomeComponent;