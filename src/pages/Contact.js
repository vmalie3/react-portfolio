import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import '../style/Contact.css'

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const inputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name')setName(inputValue);
        if (inputType === 'email') setEmail(inputValue);
        if (inputType === 'message') setMessage(inputValue);
    }

    const blankName = (e) => {
        const { target } = e;
        const inputValue = target.value;

        if (!inputValue) setError('Name must not be blank');
        else setError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) setError('The email you entered is invalid');
        if(name === '') setError('Name cannot be blank');
        if(!validateEmail && name === '') setError('Please make sure you entered a valid email and name');

        if(validateEmail(email) && name !== '') {
            setName('');
            setEmail('');
            setMessage('');
            setError('Your contact form has been submitted');
        }
    }

    return (
        <>
            <h1 className="contactTitle">Contact Me</h1>
            <form className="form" style={style.form}>
                <label>Name:</label>
                <input 
                    value={name}
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    onChange={inputChange}
                    style={style.input}
                />
                <label>Email:</label>
                <input 
                    value={email}
                    name="email"
                    type="email"
                    placeholder="john.doe@email.com"
                    onChange={inputChange}
                    style={style.input}
                />
                <label>Message:</label>
                <textarea 
                    rows={6}
                    value={message}
                    name="message"
                    type="textarea"
                    placeholder="Type your message here"
                    onChange={inputChange}
                    style={style.input}
                />
                <button type="button" onClick={handleSubmit} className="submit">
                    Submit
                </button>
            </form>
            {error && (
                <div>
                    <p className="error-text">{error}</p>
                </div>
            )}
        </>
    )
}

const style = {
    form: {
        margin: '18px',
    },
    input: {
        display: 'block',
        margin: '5px',
        width: '100%',
    },
}

export default Contact;