import React from 'react';
import {
    Modal,
    Image,
    Container,
    Grid,
    Divider
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
                closeIcon
                style={{maxWidth: "80vw"}}
            >
                <Modal.Content className="bio-container">
                    <Grid>
                        <Grid.Column computer={6} tablet={6} mobile={16}>
                                <Image className="bio-image" src={activeMember.img} alt={activeMember.name} />
                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={16}>
                            <Modal.Header>
                                <h3>{activeMember.name}</h3>
                            </Modal.Header>
                            <Divider />
                            <Modal.Content>
                                <p>{activeMember.bio}</p>
                            </Modal.Content>
                        </Grid.Column>
                    </Grid>
                </Modal.Content>
            </Modal>
        </Container>
    );
};

export default BioComponent;