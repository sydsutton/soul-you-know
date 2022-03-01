import React, { useEffect } from 'react';
import {musicList} from "../data/musicList"
import ReactAudioPlayer from 'react-audio-player';
import cover from "../images/photoPage/photos/FrontCover2.jpg"
import {
    Container,
    Divider,
    Card,
    Image,
    Icon
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
                        <Card key={index} style={{margin: ".5rem", width: "25rem"}}>
                            <Image src={cover} style={{borderRadius: "20px"}} />
                            <Card.Content className="music-content" style={{backgroundColor: "rgba(255, 255, 255, .55)", backdropFilter: "blur(5px)", width: "100%"}}>
                                <div className="music-audio-header">
                                    <h3>{song.name}</h3>
                                    <a href="#" onClick={() => window.open('https://open.spotify.com/artist/2hxK5s6Gvisb2GOx6Pl1cx', "_blank")}><Icon name="spotify" size="large" /></a>
                                    <a href="#" onClick={() => window.open('https://music.apple.com/us/artist/soul-you-know/1567783709', "_blank")}><Icon name="apple" size="large" /></a>
                                </div>
                                <ReactAudioPlayer 
                                    src={song.src}
                                    controls
                                    className="music-audio"
                                    volume={.3}
                                />
                            </Card.Content>
                        </Card>
                    )
                })}
            </div>
        </Container>
    );
};

export default MusicComponent;