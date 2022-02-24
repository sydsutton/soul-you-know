import React from 'react';
import {youtubeList} from "../youtubeList"
import {
    Placeholder
} from "semantic-ui-react"

const VideosComponent = () => {
    return (
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
    );
};

export default VideosComponent;