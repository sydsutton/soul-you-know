import React, { useState, useEffect } from 'react';
import {
    Portal,
    Segment,
    Button,
    Header,
    Icon
} from "semantic-ui-react"

const MailingListComponent = () => {

    const [isPortalOpen, setIsPortalOpen] = useState(false)

    useEffect(() => { 
        setTimeout(() => {
            setIsPortalOpen(true)
        }, 5000)
    }, [])

    return (
        <Portal onClose={() => setIsPortalOpen(false)} open={isPortalOpen}>
            <Segment style={{position: "fixed", top: "0", right: "10%", zIndex: "1000", background: "#ddd"}}>
                <Icon 
                    onClick={() => setIsPortalOpen(false)} 
                    name="close" 
                    className="close-x" 
                />
                <Header style={{marginTop: "1rem"}}>Sign up for our mailing list!</Header>
                <div className="portal-buttons">
                    <Button color="primary" onClick={() => setIsPortalOpen(false)}>Sign up</Button>
                    <Button color="black" onClick={() => setIsPortalOpen(false)}>Close</Button>
                </div>
            </Segment>
        </Portal>
    );
};

export default MailingListComponent;