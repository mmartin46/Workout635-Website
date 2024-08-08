import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginlayout.scss';

const LoginLayout = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [failedMessage, setFailedMessage] = useState();

    const usernameRef = useRef();
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const createSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://localhost:44314/Login", {
            method: 'POST',
            credentials: 'include',           
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            usernameRef.current.focus();
            setFailedMessage('Invalid Account. Please try again.');
        } else {
            return navigate('/loginSuccess');
        }
    }


    return (
        <div className="main-div">
            <form onSubmit={createSubmit}>
                <div className="create">
                    <h2>Login</h2>

                    <div className="credBox">
                        <div>
                            <h5>Username</h5>
                            <input onChange={handleChange} ref={usernameRef} name="Username" htmlFor="Username" type="text" />
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input onChange={handleChange} name="Password" htmlFor="Password" type="password" />
                        </div>
                        <div className="contact-btn">
                            <button type="submit">Submit</button>
                        </div>
                        {failedMessage && <h6 style={{ opacity: '0.8' }}>{failedMessage}</h6>}
                    </div>
                </div>
            </form>
        </div>
    )
};


export default LoginLayout;