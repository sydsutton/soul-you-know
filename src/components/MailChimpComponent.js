import React, { useState, useContext } from 'react';
import {
    Portal,
    Segment,
    Button,
    Image,
    Input,
    Icon,
    Divider,
} from "semantic-ui-react"
import logo from "../images/logo2.png"
import {Context} from "../Context"

const MailChimpComponent = ({status, message, onValidated}) => {

    const {isModalOpen, setIsModalOpen} = useContext(Context)

    const [email, setEmail] = useState("")

    const closePortal = () => {
        setTimeout(() => {
            setIsModalOpen(false)
        }, 4000)
    }
    console.log(status, message)
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
        boxShadow: "5px 5px 5px rgba(0,0,0,.4)",
    }

    return (
        <Portal 
            open={isModalOpen}
            className="portal-outer"
        >
            <Segment className="portal-container" style={segmentStyles}>
                <Icon 
                    onClick={() => setIsModalOpen(false)} 
                    name="close" 
                    className="close-x" 
                />

                <div className="mailing-title-container">
                    <img src={logo} height="50px" width="50px" /><h3 style={{marginTop: "1rem", marginBottom: "0"}}>Stay in the Know!</h3>
                </div>
                    <Divider />
                    {status === "sending" ? 
                        <p>Sending. . .</p>
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
                    :   
                        <p className="portal-p">Subscribe and we'll keep you updated on shows</p>

                    }
                <form onSubmit={handleSubmit}>
                    <Input 
                        type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        fluid
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
                                color="teal" 
                                size="small"
                                loading
                            >
                                Loading
                            </Button>
                        :
                                <Button 
                                color="teal" 
                                type="submit"
                                disabled={!email}
                                size="small"
                                content="Subscribe"
                                icon="signup"
                            />
                        }
                        <Button 
                            size="small" 
                            color="black" 
                            content="No thanks"
                            basic
                            onClick={() => setIsModalOpen(false)}
                            icon="close"
                        />
                    </div>
                </form>
            </Segment>
        </Portal>
    );
};

export default MailChimpComponent;