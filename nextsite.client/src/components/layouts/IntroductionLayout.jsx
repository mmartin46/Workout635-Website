import { useState, useEffect, useRef } from 'react';
import './IntroductionLayout.scss';
import Topic from '../general/Topic';
import { useNavigate } from "react-router-dom";
import GeneralMap from '../general/Map';


const IntroductionLayout = () => {
    const [employees, setEmployees] = useState([]);
    const [opportunities, setOpportunities] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployees = () => {
            $.ajax({
                url: "https://localhost:44314/Employee",
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setEmployees(res);
                }
            });
        };
        fetchEmployees();
    }, [employees]);

    useEffect(() => {
        const fetchOpportunities = () => {
            $.ajax({
                url: "https://localhost:44314/Opportunities",
                type: 'GET',
                crossDomain: true,
                dataType: 'json',
                success: function (res) {
                    setOpportunities(res);
                }
            });
        };

        fetchOpportunities();
    }, [opportunities]);

    const navigateToContact = () => {
        setTimeout(() => {
            navigate("/contact");
        }, 300);
    };

    const position = [51.505, -0.09];
    const mapRef = useRef(null);

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
            <div className="main-content intro-container gray text-center">
                <div>
                    <h1 className="display-4">Meet Our Team</h1>
                    <h6>At Workout365, we ensure that our employees are available
                        during business hours to be able to take care of your workout
                        needs.</h6>
                </div>

                <div className="row">
   
                    {employees && employees.map((employee) => (
                        <div className="col serv-div" key={employee.id}>
                            <img src={employee.headshot} />
                            <div>
                                <h4>{employee.firstName} {employee.lastName}</h4>
                                <h5>{employee.position}</h5>

                                <h6>{employee.phoneNumber}</h6>
                                <h6>{employee.email}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="">
                <a href="#careers"></a>
                <div className="text-center">
                    <h1 className="display-4">Looking For Oppurtunities</h1>
                    <h6>Are you looking for employment oppurtunies. Feel free
                        to check out our available roles.</h6>
                </div>
                <div className="center-div">
                    <div className="row spacing-50">
                        {opportunities && opportunities.map((opportunity) => (
                            <div key={opportunity.id} className="col-sm-5 member-card">
                                <div>
                                    <h3>{opportunity.position}</h3>
                                    <h6>Hourly Rate: {opportunity.salary}</h6>
                                    <h6>YOE: {opportunity.yearsOfExperience}</h6>
                                    <h6>Education: {opportunity.requirements}</h6>
                                    <h6>Plus: {opportunity.pluses}</h6>
                                </div>
                                <div onClick={navigateToContact} className="click-more">

                                    <h4>Contact Us</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="main-content intro-container gray text-center">
                <a href="#work"></a>
                <div>
                    <h1 className="display-4">Our Work</h1>
                    <h6>At Workout365, we ensure that our employees are available
                        during business hours to be able to take care of your workout
                        needs.</h6>
                </div>
            </div>
            <div>
                <GeneralMap />
            </div>
        </>
    );
};

export default IntroductionLayout;