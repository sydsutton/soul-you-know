import React, { useEffect } from 'react';
import {musicList} from "../data/musicList"
import {
    Container
} from "semantic-ui-react"

const MusicComponent = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <Container className="songs-container" style={{marginTop: "9rem"}}>
            {musicList.map((song, index) => {
                return (
                    <iframe 
                        key={index}
                        style={{borderRadius: "12px", maxWidth: "40rem", marginBottom: "2rem"}}
                        src={song.src}
                        width="100%" 
                        height="80" 
                        frameBorder="0" 
                        allowFullScreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    />
                )
            })}
        </Container>
    );
};

export default MusicComponent;