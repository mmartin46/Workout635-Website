// John 3:5
import { useEffect, useState } from 'react';
import Topic from '../general/Topic';
import './YogaClassLayout.scss';

const BootCampLayout = () => {
    const [bootCamps, setbootCamps] = useState(null);

    useEffect(() => {
        const getData = () => {
            $.ajax({
                url: `${import.meta.env.VITE_API_URL}/Bootcamps`,
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setbootCamps(res);
                    console.log('Bootcamps-> ', res);
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching bootcamps:', error);
                }
            });
        };

        getData();
    }, []);

    return (
        <div>
            <Topic
                title="Bootcamps"
                caption="The fence was confused about whether it was supposed to keep things in or keep things out." />


            <div className="main-padding fadeUp">
                <div className="heading-part row">
                    <img src="/athlete.png" />
                    <div className="topic col">
                        <h1>What Do Our Bootcamps Provide?</h1>
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                    </div>
                </div>
                <div className="row">
                    {bootCamps && bootCamps.map((bootcamp) => (
                        <div className="col serv-div" key={bootcamp.Id || bootcamp.id || bootcamp._id}>
                            <img src={bootcamp.Image || bootcamp.image} alt={bootcamp.Name || bootcamp.name} />
                            <div>
                                <h2>{bootcamp.Name || bootcamp.name}</h2>
                                <h5>{bootcamp.Description || bootcamp.description}</h5>
                                <h5>Duration: {bootcamp.Duration || bootcamp.duration}</h5>
                                <h5>Intensity: {bootcamp.Intensity || bootcamp.intensity}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BootCampLayout;