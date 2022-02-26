import React, { useState } from 'react';
import {
    Portal,
    Segment,
    Button,
    Header,
    Input,
    Icon
} from "semantic-ui-react"

const MailChimpComponent = ({isPortalOpen, setIsPortalOpen, status, message, onValidated}) => {

    const [email, setEmail] = useState("")

    const closePortal = () => {
        setTimeout(() => {
            setIsPortalOpen(false)
        }, 3000)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email){
            onValidated({
                MERGE0: email
            })
        }
    }

    if(status === "success"){
        closePortal()
    }

    return (
        <Portal 
            // onClose={() => setIsPortalOpen(false)} 
            open={isPortalOpen}
        >
            <Segment className="portal-container" style={{height: "15rem", display: "flex", flexDirection: "column", justifyContent:"space-evenly", position: "fixed", top: "0", right: "10%", zIndex: "1000", background: "#eee"}}>
                <Icon 
                    onClick={() => setIsPortalOpen(false)} 
                    name="close" 
                    className="close-x" 
                />
                {status === "sending" ? 
                    <h4>Sending...</h4>
                :
                status === "error" ? 
                    <div 
                        style={{color: "red"}}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                :
                status === "success" ? 
                    <div
                        style={{color: "green"}}
                        dangerouslySetInnerHTML={{ __html: message }}
                    />
                :   <div>
                        <Header style={{marginTop: "1rem"}}>Sign up for our mailing list!</Header>
                        <p className="portal-p">We'll keep you updated on shows</p>
                    </div>
                }
                <form onSubmit={handleSubmit}>
                    <Input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        fluid
                        focus
                        icon="mail"
                        value={email}
                        iconPosition='left'
                        size="small"
                        style={{margin: "1rem"}}
                    />
                    <div className="portal-buttons">
                        <Button 
                            color="blue" 
                            type="submit"
                            disabled={!email}
                            size="small"
                        >
                            Sign up
                        </Button>
                        <Button size="small" color="black" onClick={() => setIsPortalOpen(false)}>Close</Button>
                    </div>
                </form>
            </Segment>
        </Portal>
    );
};

export default MailChimpComponent;