import React, { useEffect } from 'react';
import {youtubeList} from "../data/youtubeList"

const VideosComponent = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <div className="videos-container" style={{marginTop: "9rem"}}>
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