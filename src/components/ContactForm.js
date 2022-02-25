import React from 'react';

import {
    Form,
    Button,
    Input,
    Loader
} from "semantic-ui-react"

const ContactForm = ({handleChange, values, handleSubmit, loading }) => {
    return (
        <Form 
            as="form"
            className="form" 
            onSubmit={handleSubmit}
            id="contact-form"
        >
            <Form.Field
                control={Input}
                label="Name"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange} 
                required
            />
            <Form.Field
                control={Input}
                label="Email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange} 
                required
            />
            <Form.Field
                control={Input}
                label="Venue"
                placeholder="Venue"
                name="venue"
                value={values.venue}
                onChange={handleChange} 
                required
            />
            <Form.Field>
                <label>Date</label>
                <input 
                    type="date"
                    placeholder='Date' 
                    name="date"
                    value={values.date}
                    onChange={handleChange} 
                    required
                />
            </Form.Field>
            <Form.Field>
                <label>Description (optional)</label>
                <textarea 
                    placeholder="Anything else we should know?"
                    name="description"
                    value={values.description}
                    onChange={handleChange} 
                />
            </Form.Field>
            <div className="loader-container">
                {loading ? 
                    <Loader active className="loader-icon" color="purple">Sending...</Loader>
                : null 
                }
            </div>
            <Button disabled={loading} type='submit' color="blue">Submit</Button>
        </Form>
    );
};

export default ContactForm;