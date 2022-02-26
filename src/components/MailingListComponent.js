import React, { useState, useEffect } from 'react';
import MailChimp from "./MailChimpComponent"
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const MailingListComponent = () => {

    const [isPortalOpen, setIsPortalOpen] = useState(false)

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

    const postUrl = `https://gmail.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_U_VALUE}&id=${process.env.REACT_APP_ID_VALUE}`

    return (
        <div>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message}) => (
                    <MailChimp 
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        isPortalOpen={isPortalOpen} 
                        setIsPortalOpen={setIsPortalOpen}
                    />
                )}
             />
        </div>
    );
};

export default MailingListComponent;
