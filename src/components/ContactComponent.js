import React, {useState} from 'react';
import emailjs from "emailjs-com"
import Swal from "sweetalert2"
import {
    Container,
    Form,
    Button,
    Input
} from "semantic-ui-react"

const ContactComponent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [venue, setVenue] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
    const USER_ID = process.env.REACT_APP_USER_ID

    emailjs.init(process.env.REACT_APP_USER_ID);

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", USER_ID)
          .then((result) => {
            console.log(result.text)
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully"
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

    return (
        <Container>
            <Form 
                inverted 
                as="form"
                className="form" 
                error="true" 
                success="true"
                onSubmit={(e) => handleSubmit(e)}
                id="contact-form"
            >
                <Form.Field
                    control={Input}
                    label="Name"
                    placeholder="Name"
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required
                />
                <Form.Field>
                    <label>Email</label>
                    <input 
                        type="email"
                        placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required/>
                </Form.Field>
                <Form.Field>
                    <label>Venue</label>
                    <input 
                        type="text"
                        placeholder='Venue' 
                        value={venue}
                        onChange={(e) => setVenue(e.target.value)} 
                        required/>
                </Form.Field>
                <Form.Field>
                    <label>Date</label>
                    <input 
                        type="date"
                        placeholder='Date' 
                        value={date}
                        onChange={(e) => setDate(e.target.value)} 
                        required/>
                </Form.Field>
                <Form.Field>
                    <label>Description (optional)</label>
                    <textarea 
                        placeholder="Anything else we should know?"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    );
};

export default ContactComponent;