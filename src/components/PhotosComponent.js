import React, { useState } from 'react';
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
    
    const photoData = filter ? photoPageData.filter(photo => photo.type === filter) :photoPageData 

    return (
        <Container style={{margin: "7rem", paddingBottom: "7rem"}} className="photo-page-container">
            <h1>Photos</h1>
            <Divider />
            <div className="button-group-container">
                <Button.Group size="small" color="white">
                    <Button onClick={() => setFilter("")}>All</Button>
                    <Button onClick={() => setFilter("live")}>Shows</Button>
                    <Button onClick={() => setFilter("artwork")}>Artwork</Button>
                    <Button onClick={() => setFilter("other")}>Other</Button>
                </Button.Group>
            </div>
            <div className="photos-container">
                {photoData.map(photo => {
                    return (
                        <div key={photo.index} className="photo-image" onClick={() => setSelectedImage(photo.img)}>
                            <Image src={photo.img} alt={`soul you know ${photo.type}`} />
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