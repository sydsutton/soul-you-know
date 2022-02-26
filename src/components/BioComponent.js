import React from 'react';
import {
    Modal,
    Image,
    Container
} from "semantic-ui-react"

const BioComponent = ({activeMember, bioOpen, setBioOpen, setActiveIndex}) => {
    return (
        <Container>
            <Modal 
                open={bioOpen} 
                onClose={() => {
                    setBioOpen(false)
                    setActiveIndex(-1)
                }} 
                className="bio-container"
                closeIcon
            >
                <div className="bio-image-container">
                    <Image className="bio-image" src={activeMember.img} alt={activeMember.name} />
                </div>
                <Modal.Header>
                    <h3>{activeMember.name}</h3>
                </Modal.Header>
                <Modal.Content>
                    <p>{activeMember.bio}</p>
                </Modal.Content>
            </Modal>
        </Container>
    );
};

export default BioComponent;