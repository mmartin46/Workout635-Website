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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
  
    const createSubmit = async (e) => {
        e.preventDefault();


    }

    return (
        <div>
            <div className="create">
                <h2>Create Account</h2>

                <div className="credBox">
                    <div>   
                        <h5>Username</h5>
                        <input></input>
                    </div>
                    <div>
                        <h5>Password</h5>
                        <input></input>
                    </div>
                    <div>
                        <h5>Confirm Password</h5>
                        <input></input>
                    </div>
                    <div>
                        <h5>Email</h5>
                        <input></input>
                    </div>
                    <div>
                        <h5>Confirm Email</h5>
                        <input></input>
                    </div>

                    <div className="contact-btn">
                        <h5>Submit</h5>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default CreateAccountLayout;