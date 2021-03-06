import React, { useState, useEffect } from 'react';
import { photoPageData } from "../images/photoPage/photoPageData"

import {
    Image,
    Container,
    Divider,
    Button,
    Modal
} from "semantic-ui-react"

const PhotosComponent = () => {

    const [filter, setFilter] = useState("")
    const [selectedImage, setSelectedImage] = useState("")

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    
    const photoData = filter ? photoPageData.filter(photo => photo.type === filter) :photoPageData 

    return (
        <Container style={{margin: "7rem", paddingBottom: "7rem"}} className="photo-page-container">
            <h1>Photos</h1>
            <Divider />
            <div className="button-group-container">
                <Button.Group size="small" color="grey">
                    <Button onClick={() => setFilter("")} style={{background: filter === "" ? "#5766ba" : ""}}>All</Button>
                    <Button onClick={() => setFilter("live")} style={{background: filter === "live" ? "#5766ba" : ""}}>Shows</Button>
                    <Button onClick={() => setFilter("artwork")} style={{background: filter === "artwork" ? "#5766ba" : ""}}>Artwork</Button>
                    <Button onClick={() => setFilter("other")} style={{background: filter === "other" ? "#5766ba" : ""}}>Other</Button>
                </Button.Group>
            </div>
            <div className="photos-container">
                {photoData.map((photo, index) => {
                    return (
                        <div key={index} className="photo-image-container" onClick={() => setSelectedImage(photo.img)}>
                            <Image src={photo.img} alt={`soul you know ${photo.type}`} className="photo-image" />
                        </div>
                    )
                })}
            </div>
            <Modal closeIcon open={selectedImage ? true : false} onClose={() => setSelectedImage("")} style={{background: "transparent", margin: "2rem"}}>
                <Modal.Content style={{background: "transparent"}} >
                    <Image src={selectedImage} className="modal-image" />
                </Modal.Content>
            </Modal>
        </Container>
    );
};

export default PhotosComponent;