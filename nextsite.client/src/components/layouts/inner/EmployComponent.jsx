import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../IntroductionLayout.scss';

const EmployComponent = () => {
    const [opportunities, setOpportunities] = useState([]);
    const navigate = useNavigate();

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

    return (
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
    )
};

export default EmployComponent;