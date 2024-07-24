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
                url: "https://localhost:44314/Locations",
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setLocations(res);
                }
            })
        };

        getLocations();
    }, []);


    useEffect(() => {
        $.ajax({
            url: "https://localhost:44314/Timeline",
            type: "GET",
            crossDomain: true,
            dataType: 'json',
            success: function (res) {
                setTimeline(res);
            }
        });
    }, [timeline]);


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
                            <h6 key={event.id}><b>{event.year}</b> - {event.topic}</h6>
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
            <div className="text-center">
                <h1 className="display-4">Our Locations</h1>
                <GeneralMap locations={locations}  />
            </div>
        </>
    );
};

export default IntroductionLayout;