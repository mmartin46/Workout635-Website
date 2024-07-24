import { useState, useEffect, useRef } from 'react';
import './IntroductionLayout.scss';
import Topic from '../general/Topic';
import { useNavigate } from "react-router-dom";
import GeneralMap from '../general/Map';
import StaffComponent from './inner/StaffComponent';
import EmployComponent from './inner/EmployComponent';


const IntroductionLayout = () => {
    const [timeline, setTimeline] = useState([]);


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
                <div>
                    <h1 className="display-4">Our Work</h1>
                    <h6>At Workout365, we ensure that our employees are available
                        during business hours to be able to take care of your workout
                        needs.</h6>
                    <h3>Our Timeline</h3>
                    <h6></h6>
                </div>
            </div>
            <div>
                <GeneralMap />
            </div>
        </>
    );
};

export default IntroductionLayout;