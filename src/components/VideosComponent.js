import React from 'react';
import {youtubeList} from "../youtubeList"

const VideosComponent = () => {
    return (
        <div className="videos-container">
            {youtubeList.map((video, index) => {
                return (
                    <iframe 
                        key={index}
                        width="460" 
                        height="250" 
                        src={video.src}
                        title={video.title}
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    />
                )
            })}
        </div>
    );
};

export default VideosComponent;