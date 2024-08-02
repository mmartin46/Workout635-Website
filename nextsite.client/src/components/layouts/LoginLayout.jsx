import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginLayout = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });

        if (!response.ok) {
            let error = await response.json();
            console.log('Problem submitting', error);
            usernameRef.current.focus();
        } else {
            return navigate('/loginSuccess');
        }
    }


    return (
        <div>
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
                    </div>
                </div>
            </form>
        </div>
    )
};


export default LoginLayout;