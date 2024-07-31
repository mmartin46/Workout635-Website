import { useState, useEffect } from 'react';
import './CreateAccount.scss';
const CreateAccountLayout = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        confirmEmail: ''
    });
    const [successMessage, setSuccessMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
  
    const createSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://localhost:44314/AddAccount", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            let error = await response.message;
            console.log('Problem submitting', error);
        } else {
            setSuccessMessage('Account created!');
        }
    }


    return (
        <div>
            <form onSubmit={createSubmit}>
                <div className="create">
                    <h2>Create Account</h2>

                    <div className="credBox">
                        <div>   
                            <h5>Username</h5>
                            <input onChange={handleChange} name="Username" htmlFor="Username" type="text"/>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input onChange={handleChange} name="Password" htmlFor="Password" type="password"/>
                        </div>
                        <div>
                            <h5>Confirm Password</h5>
                            <input onChange={handleChange} name="ConfirmPassword" htmlFor="ConfirmPassword" type="password" />
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input onChange={handleChange} name="Email" htmlFor="Email" type="email"/>
                        </div>
                        <div>
                            <h5>Confirm Email</h5>
                            <input onChange={handleChange} name="ConfirmEmail" htmlFor="ConfirmEmail" type="email"/>
                        </div>

                        <div className="contact-btn">
                            <button type="submit">Submit</button>
                        </div>
                        {successMessage && <h6 style={{ opacity: '0.8' }}>{successMessage}</h6>}
                    </div>
                </div>
            </form>
        </div>
    );
};


export default CreateAccountLayout;