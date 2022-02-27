import React, { useEffect } from 'react';
import {musicList} from "../data/musicList"
import {
    Container,
    Divider
} from "semantic-ui-react"

const MusicComponent = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <Container className="songs-page-container">
            <h1>Music</h1>
            <Divider />
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
                            allowFullScreen="" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        />
                    )
                })}
            </div>
        </Container>
    );
};

export default MusicComponent;