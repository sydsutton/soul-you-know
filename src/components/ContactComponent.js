import React, {useState} from 'react';
import Form from "./ContactForm"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import {
    Container,
    Divider,
    Icon,
    Grid
} from "semantic-ui-react"

const ContactComponent = () => {
    const initialFormValues = {
        name: "",
        email: "",
        venue: "",
        date: "",
        description: ""
    }
    const [values, setValues] = useState(initialFormValues)

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
    const USER_ID = process.env.REACT_APP_USER_ID

    emailjs.init(process.env.REACT_APP_USER_ID);

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", USER_ID)
          .then(() => {
            setValues(initialFormValues)
            
            Swal.fire({
              icon: "success",
              title: "Thanks! We'll get back to you soon!"
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
              text: error.text,
            })
          });
      }

      const iconSize = "big"

    return (
        <Container>
            <Grid mobile={16} tablet={8} computer={8} className="social-container">
                <Grid.Column mobile={16} tablet={8} computer={8} className="contact-title-container">
                    <div className="contact-title-container">               
                        <h2>Contact Us</h2>
                        <Divider/>
                    </div>
                    <ul className="social-list">
                        <li className="contact-item-container">
                            <Icon name="mail" size={iconSize}/>
                            <p>soulyouknowband@gmail.com</p>
                        </li>
                        <li className="contact-item-container">
                            <Icon name="instagram" size={iconSize}/>
                            <p>https://www.instagram.com/soulyouknow/</p>
                        </li>
                        <li className="contact-item-container">
                            <Icon name="facebook" size={iconSize} />
                            <p>https://www.facebook.com/soulyouknowband</p>
                        </li> 
                    </ul>
                </Grid.Column>

                <Grid.Column mobile={16} tablet={8} computer={8}>
                    <div className="contact-title-container">
                        <h2>Want us to play a show?</h2>
                        <Divider />
                        <h5>Reach out. We'll get back to you ASAP</h5>
                    </div>
                    
                    <Form handleChange={handleChange} values={values} handleSubmit={handleSubmit} />

                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default ContactComponent;