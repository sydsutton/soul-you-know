import React, { useState } from 'react';
import {
    Portal,
    Segment,
    Button,
    Header,
    Input,
    Icon,
    Divider,
    Loader
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

    const segmentStyles = { 
        display: "flex", 
        flexDirection: "column", 
        justifyContent:"space-evenly", 
        position: "fixed", 
        top: "0", 
        right: "10%", 
        zIndex: "1000", 
        background: "rgb(241,241,241)", 
        boxShadow: "5px 5px 5px rgba(0,0,0,.4)"
    }

    return (
        <Portal 
            open={isPortalOpen}
        >
            <Segment className="portal-container" style={segmentStyles}>
                <Icon 
                    onClick={() => setIsPortalOpen(false)} 
                    name="close" 
                    className="close-x" 
                />
                {status === "sending" ? 
                    <h4>Sending. . .</h4>
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
                        <Header style={{marginTop: "1rem", marginBottom: "0"}}>Stay in the Know!</Header>
                        <Divider />
                        <p className="portal-p">Subscribe and we'll keep you updated on shows</p>
                    </div>
                }
                <form onSubmit={handleSubmit}>
                    <Input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        fluid
                        focus
                        placeholder="Email"
                        icon="mail"
                        value={email}
                        iconPosition='left'
                        size="small"
                        style={{margin: "1rem"}}
                    />
                    <div className="portal-buttons">
                        {status === "sending" ? 
                            <Button 
                                color="purple" 
                                size="small"
                                loading
                            >
                                Loading
                            </Button>
                        :
                                <Button 
                                color="purple" 
                                type="submit"
                                disabled={!email}
                                size="small"
                                content="Sign up"
                                icon="signup"
                            />
                        }
                        <Button 
                            size="small" 
                            color="black" 
                            content="No thanks"
                            basic
                            onClick={() => setIsPortalOpen(false)}
                            icon="close"
                            type="outline"
                        />
                    </div>
                </form>
            </Segment>
        </Portal>
    );
};

export default MailChimpComponent;