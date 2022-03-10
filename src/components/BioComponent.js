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
                size="fullscreen"
                open={bioOpen} 
                onClose={() => {
                    setBioOpen(false)
                    setActiveIndex(-1)
                }} 
                closeIcon
                style={{maxWidth: "80vw", marginBottom: "4rem"}}
            >
                <Modal.Content className="bio-container">
                    <Grid>
                        <Grid.Column computer={6} tablet={6} mobile={16}>
                                <Image className="bio-image" src={activeMember.img} alt={activeMember.name} />
                        </Grid.Column>
                        <Grid.Column computer={10} tablet={10} mobile={16}>
                            <Modal.Header>
                                <h3>{activeMember.name}</h3>
                            </Modal.Header>
                            <Divider />
                            <Modal.Content>
                                <p>{activeMember.bio.bio}</p>
                                <div className="bio-list-container">
                                    <ul className="bio-list">
                                        <strong>Turn-ons:</strong>
                                        {activeMember.bio.turnOns ? activeMember.bio.turnOns.map(turnOn => {
                                            return (
                                                <li>&nbsp; {turnOn}</li>
                                            )
                                        })
                                        : null}
                                    </ul>
                                    <ul className="bio-list">
                                        <strong>Turn-offs:</strong>
                                        {activeMember.bio.turnOffs ? activeMember.bio.turnOffs.map(turnOff => {
                                            return (
                                                <li>&nbsp; {turnOff}</li>
                                            )
                                        })
                                        : null}
                                    </ul>
                                </div>
                            </Modal.Content>
                        </Grid.Column>
                    </Grid>
                </Modal.Content>
            </Modal>
        </Container>
    );
};

export default BioComponent;