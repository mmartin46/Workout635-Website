import { useEffect, useState } from 'react';

const LoginLayout = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    


    return (
        <div>       
        </div>
    )
};


export default LoginLayout;