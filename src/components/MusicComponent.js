import React from 'react';
import {musicList} from "../musicList"

const MusicComponent = () => {
    return (
        <div className="songs-container">
            {musicList.map((song, index) => {
                return (
                    <iframe 
                        key={index}
                        style={{borderRadius: "12px", maxWidth: "40rem", marginBottom: "2rem"}}
                        src={song.src}
                        width="100%" 
                        height="80" 
                        frameBorder="0" 
                        allowFullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    />
                )
            })}
        </div>
    );
};

export default MusicComponent;