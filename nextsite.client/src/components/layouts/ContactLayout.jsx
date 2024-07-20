import Topic from "../general/Topic";
import './ContactLayout.scss';
import { useState, useEffect } from 'react';
const ContactLayout = () => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        header: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setContactForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const ourSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("https://localhost:44314/AddContact", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactForm)
        });

        if (!response.ok) {
            let error = await response.message();
            console.log('Problem submitting', error);
        } else {
            setSuccessMessage('Message sent successfully!');
        }
    }

    return (
        <div>
            <Topic title="Contact Us"
                caption="Have any questions about our products?" />

            <form onSubmit={ourSubmit} className="contact-form">
                <div className="row">
                    {successMessage && <h6 style={{ opacity: '0.6' }}>{successMessage}</h6>}
                        <div className="col">
                            <h4>Name</h4>
                        <input onChange={handleChange} name="Name" htmlFor="Name" type="text" />
                        </div>
                        <div className="col">
                            <h4>Email</h4>
                        <input onChange={handleChange} name="Email" htmlFor="Email" type="email" />
                        </div>
                    </div>
                    <div className="padded">
                        <div className="row">
                            <h4>Header</h4>
                        <input onChange={handleChange} name="Header"  htmlFor="header" type="text" />
                        </div>
                        <div className="row">
                            <h4 >Message</h4>
                        <textarea onChange={handleChange} name="Message" htmlFor="message" className="msg"/>
                        </div>
                    <div className="row">
                        <button  className="contact-btn" type="submit">Submit</button>
                        </div>
                    </div>

                </form>

        </div>
    );
}

export default ContactLayout;