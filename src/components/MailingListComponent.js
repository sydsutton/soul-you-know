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
        if(localStorage.getItem("touched") === false){
            setTimeout(() => {
                setIsPortalOpen(true)
                localStorage.setItem("touched", true)
            }, 5000)
        } 

        return () => isMounted = false
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsPortalOpen(false)
    }

    return (
        <Portal onClose={() => setIsPortalOpen(false)} open={isPortalOpen}>
            <Segment style={{position: "fixed", top: "0", right: "10%", zIndex: "1000", background: "#ddd"}}>
                <Icon 
                    onClick={() => setIsPortalOpen(false)} 
                    name="close" 
                    className="close-x" 
                />
                <Header style={{marginTop: "1rem"}}>Sign up for our mailing list!</Header>
                <form onSubmit={handleSubmit}>
                    <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
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