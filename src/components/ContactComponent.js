import React, {useState, useEffect} from 'react';
import Form from "./ContactForm"
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import {
    Container,
    Divider,
    Icon,
    Grid
} from "semantic-ui-react"
import { Parallax } from 'react-scroll-parallax';

const ContactComponent = () => {
    const initialFormValues = {
        name: "",
        email: "",
        venue: "",
        date: "",
        description: ""
    }
    const [values, setValues] = useState(initialFormValues)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        window.scroll(0,0)
    }, [])

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
        setLoading(true)

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", USER_ID)
          .then(() => {
            setValues(initialFormValues)
            setLoading(false)
            Swal.fire({
              icon: "success",
              title: "Thanks! We'll get back to you soon!"
            })
          }, (error) => {
            console.log(error.text);
            setLoading(false)
            Swal.fire({
              icon: "error",
              title: "Ooops, something went wrong",
              text: error.text,
            })
          });
      }

      const iconSize = "big"

    return (
        <div>
            <Parallax speed={-30} className="contact-parallax">
                <div className="contact-parallax-image"></div>
            </Parallax>
            
            <div className="contact-container">
                <Container style={{paddingBottom: "7rem", paddingTop: "2rem"}}>
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
                            <div className="book-container">
                                <h2>Want to book us?</h2>
                                <Divider />
                            </div>
                            
                            <Form handleChange={handleChange} values={values} handleSubmit={handleSubmit} loading={loading} />

                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default ContactComponent;