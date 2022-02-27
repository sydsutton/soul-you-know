import React, { useEffect } from 'react';
import {youtubeList} from "../data/youtubeList"

import {
    Divider,
    Container
} from "semantic-ui-react"

const VideosComponent = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <Container style={{marginTop: "7rem"}} className="videos-page-container">
            <h1>Videos</h1>
            <Divider />
            <div className="videos-container">
                {youtubeList.map((video, index) => {
                    return (
                        <div className="ui placeholder video-placeholder" style={{maxWidth: "100%", maxHeight: "100%"}}>
                            <iframe 
                                key={index}
                                src={video.src}
                                title={video.title}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            />
                        </div>
                    )
                })}
            </div>
        </Container>
    );
};

export default VideosComponent;