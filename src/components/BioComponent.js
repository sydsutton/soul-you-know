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
                style={{maxWidth: "80vw"}}
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
                                <Grid style={{marginTop: "1rem"}}>
                                    <div className="scroll-box">
                                        <p>{activeMember.bio.bio}</p>
                                    </div>
                                    <Grid.Column computer={8} tablet={8} mobile={16}>
                                        <ul className="bio-list">
                                            <strong>Turn-ons:</strong>
                                            {activeMember.bio.turnOns.map((turnOn, index) => {
                                                return (
                                                    <li key={index}>&nbsp; {turnOn}</li>
                                                )
                                            })}
                                        </ul>
                                    </Grid.Column>
                                    <Grid.Column computer={8} tablet={8} mobile={16}>
                                        <ul className="bio-list">
                                            <strong>Turn-offs:</strong>
                                            {activeMember.bio.turnOffs.map((turnOff, index) => {
                                                return (
                                                    <li key={index}>&nbsp; {turnOff}</li>
                                                )
                                            })}
                                        </ul>
                                    </Grid.Column>
                                </Grid>
                            </Modal.Content>
                        </Grid.Column>
                    </Grid>
                </Modal.Content>
            </Modal>
        </Container>
    );
};

export default BioComponent;