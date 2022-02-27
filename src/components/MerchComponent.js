import React, { useEffect } from 'react';

import {
    Container,
    Divider
} from "semantic-ui-react"

const MerchComponent = () => {

    useEffect(() => {
        window.scroll(0,0)
    }, [])
    
    return (
        <Container className="merch-page-container">
            <h1>Merch</h1>
            <Divider />
            <h3>Unfortunately, we don't have any merch at this time</h3>
            <h5>Please try again soon!</h5>
        </Container>
    );
};

export default MerchComponent;