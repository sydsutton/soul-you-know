import React, { useEffect } from 'react';
import Members from "./MembersComponent"
import { Parallax } from "react-scroll-parallax"
import {showsList} from "../data/showsList"
import ReactAudioPlayer from "react-audio-player"
import Fishbowl from "../data/songs/Fishbowl.mp3"
import cover from "../images/photoPage/photos/Album.jpg"

import {
    Divider,
    Container,
    Grid,
    Icon,
    Card,
    Image
} from "semantic-ui-react"

const HomeComponent = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])

    return (
        <div>

            <Parallax speed={-50} className="hero-container" translateY={[-50, 40]}>
                <div className="hero-image"/>
            </Parallax>

            <div className="main-container">
                <Container>
                    <Grid>
                        <Grid.Column mobile={16} tablet={16} computer={8} className="shows-container">
                            <h2>Upcoming Shows</h2>
                            <Divider style={{margin: "-.5rem 0 2rem"}}/>

                            {showsList.map((show, index) => {
                                return (
                                    <div className="show-container" key={index}>
                                        <div className="show-title">
                                            <h4>{show.date}</h4>
                                            <h2>{show.venue}</h2>
                                            <h5>Cover- {show.cover}</h5>
                                            {show.eventLink ? 
                                                <a href="#" onClick={() => window.open(show.eventLink, '_blank')} className="site-link-container">
                                                    <Icon name="linkify" />
                                                    <p>{show.eventLink}</p>
                                                </a>
                                            :
                                            null
                                            }
                                            <a href="#" onClick={() => window.open(show.link, '_blank')} className="site-link-container">
                                                <Icon name="external square alternate" />
                                                <p>{show.link}</p>
                                            </a>
                                            <a href="#" onClick={() => window.open(`https://www.google.com/maps/place/${show.address}`, '_blank')} className="address-container">
                                                <Icon name="point" />
                                                <p>{show.address}</p>
                                            </a>
                                        </div>
                                        <Divider />
                                    </div>
                                )
                            })}
                        </Grid.Column>

                        <Grid.Column mobile={16} tablet={16} computer={8} className="featured-container">
                            <h2>Featured</h2>
                            <Divider style={{margin: "-.5rem 0 2rem"}}/>
                            <div className="ui stackable two column grid iframe-container">
                                <Card style={{width: "65%"}}>
                                    <Image src={cover} style={{borderRadius: "20px"}} />
                                    <Card.Content className="featured-content" style={{backgroundColor: "rgba(255, 255, 255, .35)", backdropFilter: "blur(5px)", width: "100%"}}>
                                        <div className="featured-audio-header">
                                            <h3>Fishbowl</h3>
                                            <a href="#" onClick={() => window.open('https://open.spotify.com/artist/2hxK5s6Gvisb2GOx6Pl1cx', "_blank")}><Icon name="spotify" size="big" /></a>
                                            <a href="#" onClick={() => window.open('https://music.apple.com/us/artist/soul-you-know/1567783709', "_blank")}><Icon name="apple" size="big" /></a>
                                        </div>
                                        <ReactAudioPlayer 
                                            src={Fishbowl}
                                            controls
                                            className="featured-audio"
                                            volume={.3}
                                        />
                                    </Card.Content>
                                </Card>
                            </div>  
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>

            <Parallax speed={-20} className="middle-container">
                <div className="middle-image"/>
            </Parallax>

            <div className="member-parent-container" style={{paddingBottom: "7rem"}}>
                <Container>
                    <Grid>
                        <Grid.Column>
                            <h2>Meet the band</h2>
                            <Divider/>

                            <Members />

                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default HomeComponent;