import React from 'react';
import ShowTable from "./ShowTableComponent"

import {
    Divider,
    Placeholder
} from "semantic-ui-react"

const HomeComponent = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="jumbo-overlay">Soul You Know</h1>
            </div>
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
        </div>
    );
};

export default HomeComponent;