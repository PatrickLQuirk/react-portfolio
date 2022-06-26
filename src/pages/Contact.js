import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { Grid } from '@mui/material';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // currently the validation is not perfect
    // if you have something invalid in one field, then go to a second field,
    // and then leave that second field, the error message for the first field is no longer present,
    // even if there is still an error in that field

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <main>
            <h1 data-testid="h1tag">Contact</h1>
            <p>Currently the following contact form does not have the functionality to actually contact me yet. You can see how the form will work though.</p>
            <p>In the meantime, you can reach me by email at patrickliamquirk@yahoo.com</p>
            <form id="contact-form" onSubmit={handleSubmit}>
                <Grid container>
                    <Grid item xs={4} sm={2}>
                        <label htmlFor="name">Name:</label>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4} sm={2}>
                        <label htmlFor="email">Email address:</label>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4} sm={2}>
                        <label htmlFor="message" id="message-label">Message:</label>
                    </Grid>
                    <Grid item xs={4} sm={2}>
                        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </Grid>
                </Grid>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" data-testid="button">Submit</button>
            </form>
        </main>
    )
}

export default Contact