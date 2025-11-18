import { useState, useEffect } from 'react';
import './IntroductionLayout.scss';
import Topic from '../general/Topic';
import GeneralMap from '../general/Map';
import StaffComponent from './inner/StaffComponent';
import EmployComponent from './inner/EmployComponent';



const IntroductionLayout = () => {
    const [timeline, setTimeline] = useState([]);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const getLocations = () => {
            $.ajax({
                url: `${import.meta.env.VITE_API_URL}/Locations`,
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setLocations(res);
                    console.log('Locations-> ', res);
                },
                error: function (xhr, status, error) {
                    console.error('Error fetching locations:', error);
                }
            })
        };

        getLocations();
    }, []);


    useEffect(() => {
        $.ajax({
            url: `${import.meta.env.VITE_API_URL}/Timeline`,
            type: "GET",
            crossDomain: true,
            dataType: 'json',
            success: function (res) {
                setTimeline(res);
                console.log('Timeline-> ', res);
            },
            error: function (xhr, status, error) {
                console.error('Error fetching timeline:', error);
            }
        });
    }, []);


    return (
        <>
            <Topic
                title="Who We Are"
                className="padding"
                caption="Here at Workout365, we are determined to make sure that our customers
                    receive the equipment they need in order to become successful with their
                    fitness goals. Our goal is to make sure that you are getting the best out of
                    your gym options for a reasonable financial investment."
            />

            <div className="fadeUp">
                <StaffComponent className="main-content intro-container gray text-center"
                                controller="Employee"
                />
                <EmployComponent/>
                <div className="main-content intro-container gray text-center">
                    <a href="#work"></a>
                    <div className="timeline">
                        <h1 className="display-4">Our Work</h1>
                        <h6>At Workout365, we ensure that our employees are available
                            during business hours to be able to take care of your workout
                            needs.</h6>
                        <div style={{ textAlign: 'center'}}>
                            <h3>Our Timeline</h3>
                            {timeline && timeline.map((event) => (
                                <h6 key={event.Id || event.id || event._id}><b>{event.Year || event.year}</b> - {event.Topic || event.topic}</h6>
                            ))}
                            <div className="row">
                                <div className="col serv-div">
                                    <img src="https://th.bing.com/th/id/OIP.qiR478K0gMDzfUj5iZlrogHaLH?rs=1&pid=ImgDetMain" />
                                    <div className="align-content-center">
                                        <h4>Richard Samson</h4>
                                        <h5>Former Workout635 President</h5>
                                    </div>
                                </div>
                                <div className="col serv-div">
                                    <img src="https://i.pinimg.com/originals/e3/7e/0e/e37e0e25686c2139b281a57a5b4906f2.jpg" />
                                    <div>
                                        <h4>John Turner</h4>
                                        <h5>Current Workout635 President</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    </div>
            </div>
            <div className="text-center">
                <a href="#locations"></a>
                <h1 className="display-4">Our Locations</h1>
                <h6>Feel free to take a look at any of our gym facilities.</h6>
                <GeneralMap locations={locations}  />
            </div>
        </>
    );
};

export default IntroductionLayout;