import React, { useState, useEffect } from 'react';
import {
    Portal,
    Segment,
    Button,
    Header,
    Input,
    Icon
} from "semantic-ui-react"

const MailingListComponent = () => {

    const [isPortalOpen, setIsPortalOpen] = useState(false)
    const [email, setEmail] = useState("")

    useEffect(() => { 
        let isMounted = true

        //getting the mailing list modal to pop up only once per person

        if(sessionStorage.getItem("already shown") !== "true"){
            setTimeout(() => {
                setIsPortalOpen(true)
                sessionStorage.setItem("already shown", true)
            }, 5000)
        } else {
            console.log("Already shown")
        }

        return () => isMounted = false
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPortalOpen(false)
    }

    return (
        <Portal onClose={() => setIsPortalOpen(false)} open={isPortalOpen}>
            <Segment className="portal-container" style={{position: "fixed", top: "0", right: "10%", zIndex: "1000", background: "#ddd"}}>
                <Icon 
                    onClick={() => setIsPortalOpen(false)} 
                    name="close" 
                    className="close-x" 
                />
                <Header style={{marginTop: "1rem"}}>Sign up for our mailing list!</Header>
                <p className="portal-p">We'll keep you updated on shows</p>
                <form onSubmit={handleSubmit}>
                    <Input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        fluid
                        focus
                        icon="mail"
                        iconPosition='left'
                        size="small"
                        style={{margin: "1rem"}}
                    />
                    <div className="portal-buttons">
                        <Button color="blue" type="submit">Sign up</Button>
                        <Button color="black" onClick={() => setIsPortalOpen(false)}>Close</Button>
                    </div>
                </form>
            </Segment>
        </Portal>
    );
};

export default MailingListComponent;